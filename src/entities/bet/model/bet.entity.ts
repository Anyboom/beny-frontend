export const BetStatusEnum = {
  win: "win",
  lose: "lose",
  pending: "pending",
  return: "return",
} as const;

export type BetStatusEnum = (typeof BetStatusEnum)[keyof typeof BetStatusEnum];

export type BetEntity = {
  id: number;
  homeTeam: string;
  guestTeam: string;
  competition: string;
  startedAt: string;
  forecast: string;
  coefficient: number;
  status: BetStatusEnum;
};
