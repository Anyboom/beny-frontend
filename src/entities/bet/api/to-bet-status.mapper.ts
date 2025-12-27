import { BetStatusEnum } from "../model/bet-status.enum";

export function toBetStatusMapper(data: string): BetStatusEnum {
  switch (data) {
    case BetStatusEnum.win:
      return BetStatusEnum.win;
    case BetStatusEnum.return:
      return BetStatusEnum.return;
    case BetStatusEnum.lose:
      return BetStatusEnum.lose;
    case BetStatusEnum.pending:
      return BetStatusEnum.pending;
    default:
      return BetStatusEnum.pending;
  }
}
