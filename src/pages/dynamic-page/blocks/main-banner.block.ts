import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";

export class MainBannerBlock extends BaseBlock {
  public static override readonly name: string = "block_main_banner";
  public component = () => import("~/widgets/main-banner/ui/MainBanner.vue");
}
