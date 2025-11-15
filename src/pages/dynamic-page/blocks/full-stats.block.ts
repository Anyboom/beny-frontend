import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";
import type { Component } from "vue";
import { FullStats } from "~/widgets/full-stats";

export class FullStatsBlock extends BaseBlock {
  public static override readonly name: string = "block_full_stats";
  public component: Component = FullStats;
}
