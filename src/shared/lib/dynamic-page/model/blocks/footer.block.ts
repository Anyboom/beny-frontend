import { BaseBlock } from "~/shared/lib/dynamic-page/model/blocks/base.block";
import type { Component } from "vue";
import { AppFooter } from "~/widgets/footer";

export class FooterBlock extends BaseBlock {
  public static override readonly name: string = "block_footer";
  public component: Component = AppFooter;
}
