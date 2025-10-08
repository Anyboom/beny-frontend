import { BaseBlock } from "~/shared/lib/dynamic-page/model/blocks/base.block";
import type { Component } from "vue";
import { AboutUs } from "~/widgets/about-us";

export class AboutUsBlock extends BaseBlock {
  public static override readonly name: string = "block_about_us";
  public component: Component = AboutUs;
}
