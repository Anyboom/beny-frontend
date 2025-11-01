import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";
import { AppHeader } from "~/widgets/header";
import type { Component } from "vue";

export class HeaderBlock extends BaseBlock {
  public static override readonly name: string = "block_header";
  public component: Component = AppHeader;
}
