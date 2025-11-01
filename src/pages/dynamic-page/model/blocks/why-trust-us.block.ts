import { BaseBlock } from "~/pages/dynamic-page/model/blocks/base.block";
import type { Component } from "vue";
import { WhyTrustUs } from "~/widgets/why-trust-us";

export class WhyTrustUsBlock extends BaseBlock {
  public static override readonly name: string = "block_why_trust_us";
  public component: Component = WhyTrustUs;
}
