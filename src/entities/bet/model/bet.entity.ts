export const BetStatusEnum = {
  win: "win",
  lose: "lose",
  pending: "pending",
  return: "return",
} as const;

export type BetStatusEnum = (typeof BetStatusEnum)[keyof typeof BetStatusEnum];

export type BetEntity = {
  id: string;
  homeTeam: string;
  guestTeam: string;
  competition: string;
  startedAt: string;
  forecast: string;
  coefficient: string;
  status: BetStatusEnum;
};
