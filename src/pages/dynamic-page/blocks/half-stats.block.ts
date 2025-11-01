import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";
import type { Component } from "vue";
import { HalfStats } from "~/widgets/half-stats";

export class HalfStatsBlock extends BaseBlock {
  public static override readonly name: string = "block_half_stats";
  public component: Component = HalfStats;
}
