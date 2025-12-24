import { pathDirectus } from "~/shared/api/path-directus";
import { useAsyncData } from "#app";
import type { AsyncDataOptions } from "#app/composables/asyncData";
import { type MaybeRefOrGetter, toValue } from "vue";

export async function useGetBetsApi(
  params: MaybeRefOrGetter<object> = {},
  options: AsyncDataOptions<any, any, never> = {},
) {
  return useAsyncData(
    "bets",
    () => $fetch<{ data: any[] }>(`${pathDirectus}/items/bets`, { params: toValue(params) }),
    options,
  );
}
