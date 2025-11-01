import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";
import type { Component } from "vue";
import { NotLoaded } from "~/widgets/not-loaded";

export class NotLoadedBlock extends BaseBlock {
  public static override readonly name: string = "block_not_loaded";
  public component: Component = NotLoaded;
}
