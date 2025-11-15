import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";

export class ClickBaitBlock extends BaseBlock {
  public static override readonly name: string = "block_click_bait";
  public component = () => import("~/widgets/click-bait/ui/ClickBait.vue");
}
