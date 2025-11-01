import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";
import type { Component } from "vue";
import { AppFooter } from "~/widgets/footer";

export class FooterBlock extends BaseBlock {
  public static override readonly name: string = "block_footer";
  public component: Component = AppFooter;
}
