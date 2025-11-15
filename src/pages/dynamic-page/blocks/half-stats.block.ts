import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";

export class HalfStatsBlock extends BaseBlock {
  public static override readonly name: string = "block_half_stats";
  public component = () => import("~/widgets/half-stats/ui/HalfStats.vue");
}
