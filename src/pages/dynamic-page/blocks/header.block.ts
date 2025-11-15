import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";

export class HeaderBlock extends BaseBlock {
  public static override readonly name: string = "block_header";
  public component = () => import("~/widgets/header/ui/AppHeader.vue");
}
