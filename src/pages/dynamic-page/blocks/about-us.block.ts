import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";

export class AboutUsBlock extends BaseBlock {
  public static override readonly name: string = "block_about_us";
  public component = () => import("~/widgets/about-us/ui/AboutUs.vue");
}
