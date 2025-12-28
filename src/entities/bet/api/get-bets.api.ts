import { pathDirectus } from "~/shared/api/path-directus";
import { type MaybeRefOrGetter, toValue } from "vue";
import { toBetMapper } from "~/entities/bet/api/to-bet.mapper";

export async function getBetsApi(params: MaybeRefOrGetter<object> = {}) {
  const response = await $fetch<{ data: any[] }>(`${pathDirectus}/items/bets`, { params: toValue(params) });

  return response?.data?.map((item: any) => toBetMapper(item)) || [];
}
