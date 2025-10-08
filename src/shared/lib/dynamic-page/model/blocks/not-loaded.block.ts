import { BaseBlock } from "~/shared/lib/dynamic-page/model/blocks/base.block";
import type { Component } from "vue";
import { NotLoaded } from "~/widgets/not-loaded";

export class NotLoadedBlock extends BaseBlock {
  public static override readonly name: string = "block_not_loaded";
  public component: Component = NotLoaded;
}
