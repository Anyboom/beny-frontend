import { BaseBlock } from "~/pages/dynamic-page/model/blocks/base.block";
import type { Component } from "vue";
import { MainBanner } from "~/widgets/main-banner";

export class MainBannerBlock extends BaseBlock {
  public static override readonly name: string = "block_main_banner";
  public component: Component = MainBanner;
}
