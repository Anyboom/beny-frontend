import type { ComponentObjectPropsOptions, DefineComponent, Slot } from "vue";
import { defineComponent, shallowRef } from "vue";
import { makeDestructurable } from "~/shared/utils/make-destructurable";
import { keysToCamelKebabCase } from "~/shared/utils/keys-to-camel-kebab-case";

type ObjectLiteralWithPotentialObjectLiterals = Record<string, Record<string, any> | undefined>;

type GenerateSlotsFromSlotMap<T extends ObjectLiteralWithPotentialObjectLiterals> = {
  [K in keyof T]: Slot<T[K]>;
};

export type DefineTemplateComponent<
  Bindings extends Record<string, any>,
  MapSlotNameToSlotProps extends ObjectLiteralWithPotentialObjectLiterals,
> = DefineComponent & {
  new (): { $slots: { default: (_: Bindings & { $slots: GenerateSlotsFromSlotMap<MapSlotNameToSlotProps> }) => any } };
};

export type ReuseTemplateComponent<
  Bindings extends Record<string, any>,
  MapSlotNameToSlotProps extends ObjectLiteralWithPotentialObjectLiterals,
> = DefineComponent<Bindings> & {
  new (): { $slots: GenerateSlotsFromSlotMap<MapSlotNameToSlotProps> };
};

export type ReusableTemplatePair<
  Bindings extends Record<string, any>,
  MapSlotNameToSlotProps extends ObjectLiteralWithPotentialObjectLiterals,
> = [
  DefineTemplateComponent<Bindings, MapSlotNameToSlotProps>,
  ReuseTemplateComponent<Bindings, MapSlotNameToSlotProps>,
] & {
  define: DefineTemplateComponent<Bindings, MapSlotNameToSlotProps>;
  reuse: ReuseTemplateComponent<Bindings, MapSlotNameToSlotProps>;
};

export interface CreateReusableTemplateOptions<Props extends Record<string, any>> {
  inheritAttrs?: boolean;
  props?: ComponentObjectPropsOptions<Props>;
}

export function createReusableTemplate<
  Bindings extends Record<string, any>,
  MapSlotNameToSlotProps extends ObjectLiteralWithPotentialObjectLiterals = Record<"default", undefined>,
>(options: CreateReusableTemplateOptions<Bindings> = {}): ReusableTemplatePair<Bindings, MapSlotNameToSlotProps> {
  const { inheritAttrs = true } = options;

  const render = shallowRef<Slot | undefined>();

  const define = defineComponent({
    setup(_, { slots }) {
      return () => {
        render.value = slots.default;
      };
    },
  }) as unknown as DefineTemplateComponent<Bindings, MapSlotNameToSlotProps>;

  const reuse = defineComponent({
    inheritAttrs,
    props: options.props,
    setup(props, { attrs, slots }) {
      return () => {
        if (!render.value && process.env.NODE_ENV !== "production")
          throw new Error("Не получилось найти переиспользуемый шаблон");
        const vnode = render.value?.({
          ...(options.props == null ? keysToCamelKebabCase(attrs) : props),
          $slots: slots,
        });

        return inheritAttrs && vnode?.length === 1 ? vnode[0] : vnode;
      };
    },
  }) as unknown as ReuseTemplateComponent<Bindings, MapSlotNameToSlotProps>;

  return makeDestructurable({ define, reuse }, [define, reuse]) as ReusableTemplatePair<
    Bindings,
    MapSlotNameToSlotProps
  >;
}
