import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";

export class WhyTrustUsBlock extends BaseBlock {
  public static override readonly name: string = "block_why_trust_us";
  public component = () => import("~/widgets/why-trust-us/ui/WhyTrustUs.vue");
}
