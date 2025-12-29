import { pathDirectus } from "~/shared/api/path-directus";
import { type MaybeRefOrGetter, toValue } from "vue";
import type { BetDTO } from "~/entities/bet";

export function getBetsApi(params: MaybeRefOrGetter<object> = {}): Promise<{ data: BetDTO[] }> {
  return $fetch<{ data: BetDTO[] }>(`${pathDirectus}/items/bets`, {
    params: toValue(params),
  });
}
