import type { BetStatusEnum } from "./bet-status.enum";

import type { TeamDTO } from "~/entities/team";
import type { CompetitionDTO } from "~/entities/competition";
import type { ForecastDTO } from "~/entities/forecast";

export type BetDTO = {
  id: number;
  home_team: TeamDTO;
  guest_team: TeamDTO;
  competition: CompetitionDTO;
  started_at: string;
  forecast: ForecastDTO;
  coefficient: number;
  status: BetStatusEnum;
};
