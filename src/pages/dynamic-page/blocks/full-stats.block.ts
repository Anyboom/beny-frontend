import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";

export class FullStatsBlock extends BaseBlock {
  public static override readonly name: string = "block_full_stats";
  public component = () => import("~/widgets/full-stats/ui/FullStats.vue");
}
