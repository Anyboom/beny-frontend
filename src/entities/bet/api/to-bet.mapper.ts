import type { BetDTO } from "../model/bet.dto";
import type { BetEntity } from "../model/bet.entity";
import { toBetStatusMapper } from "./to-bet-status.mapper";

import { toTeamMapper } from "~/entities/team";
import { toCompetitionMapper } from "~/entities/competition";
import { toForecastMapper } from "~/entities/forecast";

export function toBetMapper(data: BetDTO): BetEntity {
  return {
    id: Number(data.id),
    homeTeam: toTeamMapper(data.home_team),
    guestTeam: toTeamMapper(data.guest_team),
    competition: toCompetitionMapper(data.competition),
    startedAt: String(data.started_at),
    forecast: toForecastMapper(data.forecast),
    coefficient: Number(data.coefficient),
    status: toBetStatusMapper(data.status),
  };
}
