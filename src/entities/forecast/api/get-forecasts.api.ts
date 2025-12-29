import { pathDirectus } from "~/shared/api/path-directus";
import { type ForecastDTO } from "../model/forecast.dto";

export async function getForecastsApi(): Promise<{ data: ForecastDTO[] }> {
  return $fetch<{ data: ForecastDTO[] }>(`${pathDirectus}/items/forecasts`);
}
