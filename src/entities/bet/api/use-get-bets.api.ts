import { pathDirectus } from "~/shared/api/path-directus";
import { type AsyncData, type NuxtError, useAsyncData } from "#app";
import type { AsyncDataOptions } from "#app/composables/asyncData";
import { type MaybeRefOrGetter, toValue } from "vue";
import { toBetMapper } from "./to-bet.mapper";
import type { BetEntity } from "../model/bet.entity";

export async function useGetBetsApi(
  params: MaybeRefOrGetter<object> = {},
  options: AsyncDataOptions<BetEntity[]> = {},
): Promise<AsyncData<BetEntity[], NuxtError<null> | undefined>> {
  return useAsyncData<BetEntity[], NuxtError<null>>(
    "bets",
    async (): Promise<BetEntity[]> => {
      const response = await $fetch<{ data: any[] }>(`${pathDirectus}/items/bets`, { params: toValue(params) });

      return response?.data?.map((item: any) => toBetMapper(item)) || [];
    },
    {
      ...options,
      default: () => [],
    },
  );
}
