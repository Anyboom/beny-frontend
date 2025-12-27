import type { TeamEntity } from "../model/team.entity";
import type { TeamDTO } from "../model/team.dto";

export function toTeamMapper(data: TeamDTO): TeamEntity {
  return {
    id: String(data.id),
    name: String(data.name),
  };
}
