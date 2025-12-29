import { pathDirectus } from "~/shared/api/path-directus";

export async function getTotalBetsApi(): Promise<{ data: { count: number }[] }> {
  return $fetch(`${pathDirectus}/items/bets`, {
    params: {
      "aggregate[count]": "*",
    },
  });
}
