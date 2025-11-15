import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";

export class OftenAskBlock extends BaseBlock {
  public static override readonly name: string = "block_often_ask";
  public component = () => import("~/widgets/ofter-ask/ui/OftenAsk.vue");
}
