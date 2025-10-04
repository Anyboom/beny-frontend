import { BaseBlock } from "~/app/blocks/base.block";
import type { Component } from "vue";
import { ClickBait } from "~/widgets/click-bait";

export class ClickBaitBlock extends BaseBlock {
  public static override readonly name: string = "block_click_bait";
  public component: Component = ClickBait;
}
