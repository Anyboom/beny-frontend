import type { ForecastEntity } from "../model/forecast.entity";
import type { ForecastDTO } from "../model/forecast.dto";

export function toForecastMapper(data: ForecastDTO): ForecastEntity {
  return {
    id: String(data.id),
    name: String(data.name),
  };
}
