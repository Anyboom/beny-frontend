import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";

export class FooterBlock extends BaseBlock {
  public static override readonly name: string = "block_footer";
  public component = () => import("~/widgets/footer/ui/AppFooter.vue");
}
