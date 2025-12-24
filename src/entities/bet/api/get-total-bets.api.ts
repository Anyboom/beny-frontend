import { pathDirectus } from "~/shared/api/path-directus";

export async function getTotalBetsApi(): Promise<number> {
  try {
    const response: any = await $fetch(`${pathDirectus}/items/bets`, {
      params: {
        "aggregate[count]": "*",
      },
    });

    return response?.data?.[0]?.count || 0;
  } catch {
    return 0;
  }
}
