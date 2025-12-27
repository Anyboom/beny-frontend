import type { BetStatusEnum } from "./bet-status.enum";

import type { TeamEntity } from "~/entities/team";
import type { CompetitionEntity } from "~/entities/competition";
import type { ForecastEntity } from "~/entities/forecast";

export type BetEntity = {
  id: number;
  homeTeam: TeamEntity;
  guestTeam: TeamEntity;
  competition: CompetitionEntity;
  startedAt: string;
  forecast: ForecastEntity;
  coefficient: number;
  status: BetStatusEnum;
};
