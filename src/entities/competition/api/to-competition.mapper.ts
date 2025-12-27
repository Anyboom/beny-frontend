import type { CompetitionEntity } from "../model/competition.entity";
import type { CompetitionDTO } from "../model/competition.dto";

export function toCompetitionMapper(data: CompetitionDTO): CompetitionEntity {
  return {
    id: String(data.id),
    name: String(data.name),
  };
}
