import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";
import type { Component } from "vue";
import { OftenAsk } from "~/widgets/ofter-ask";

export class OftenAskBlock extends BaseBlock {
  public static override readonly name: string = "block_often_ask";
  public component: Component = OftenAsk;
}
