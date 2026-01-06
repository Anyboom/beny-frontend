import { pathDirectus } from "~/shared/api/path-directus";
import type { MaybeRefOrGetter } from "vue";

export async function getTotalBetsApi(params: MaybeRefOrGetter<object> = {}): Promise<{ data: { count: number }[] }> {
  return $fetch(`${pathDirectus}/items/bets`, {
    query: {
      "aggregate[count]": "*",
      ...params,
    },
  });
}
