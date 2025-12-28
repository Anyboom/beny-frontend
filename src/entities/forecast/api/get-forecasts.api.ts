import { pathDirectus } from "~/shared/api/path-directus";
import { type ForecastDTO } from "../model/forecast.dto";
import { toForecastMapper } from "./to-forecast.mapper";

export async function getForecastsApi() {
  const response = await $fetch<{ data: ForecastDTO[] }>(`${pathDirectus}/items/forecasts`);

  return response.data.map((team: ForecastDTO) => toForecastMapper(team));
}
