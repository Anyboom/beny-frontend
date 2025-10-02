import { type Ref, ref } from "vue";
import type { BaseIssue, BaseSchema, InferOutput, SafeParseResult } from "valibot";
import { safeParse } from "valibot";

type FormSchema = BaseSchema<unknown, unknown, BaseIssue<unknown>>;

interface FormOptions<T extends Record<string, unknown>, S extends FormSchema> {
  schema: S;
  initialValues: T;
}

interface FormReturn<T extends Record<string, unknown>, S extends FormSchema> {
  values: Ref<T>;
  errors: Ref<Partial<Record<keyof T, string>>>;
  isSubmitting: Ref<boolean>;
  validate: () => boolean;
  handleSubmit: (callback: (values: InferOutput<S>) => Promise<void> | void) => Promise<void>;
  reset: () => void;
}

export function useForm<T extends Record<string, unknown>, S extends FormSchema>(
  options: FormOptions<T, S>,
): FormReturn<T, S> {
  const { schema, initialValues } = options;

  const values = ref<T>({ ...initialValues }) as Ref<T>;
  const errors: Ref<Partial<Record<keyof T, string>>> = ref({});
  const isSubmitting = ref(false);

  function validate(): boolean {
    const result = safeParse(schema, values.value) as SafeParseResult<S>;

    errors.value = {};

    if (result.success) {
      return true;
    }

    const newErrors: Partial<Record<keyof T, string>> = {};

    for (const issue of result.issues) {
      const fieldKey = issue.path?.[0]?.key as keyof T | undefined;

      if (fieldKey) {
        newErrors[fieldKey] = issue.message;
      }
    }

    errors.value = newErrors;
    return false;
  }

  async function handleSubmit(callback: (values: InferOutput<S>) => Promise<void> | void): Promise<void> {
    const isValidated = validate();

    if (isValidated) {
      isSubmitting.value = true;

      try {
        await callback(values.value as InferOutput<S>);
      } finally {
        isSubmitting.value = false;
      }
    }
  }

  function reset(): void {
    values.value = { ...initialValues };
    errors.value = {};
  }

  return {
    values,
    errors,
    isSubmitting,
    validate,
    handleSubmit,
    reset,
  };
}
