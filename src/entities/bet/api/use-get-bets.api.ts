import { pathDirectus } from "~/shared/api/path-directus";
import { useAsyncData } from "#app";

export async function useGetBetsApi() {
  return useAsyncData("bets", () =>
    $fetch<{ data: any[] }>(`${pathDirectus}/items/bets`, {
      params: {
        fields: "*.*",
        limit: 8,
        sort: "-date_updated",
        filter: { "status": { "_nin": "pending" } },
      },
    }),
  );
}
