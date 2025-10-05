import { HeaderBlock } from "~/app/blocks/header.block";
import type { BaseBlock } from "~/app/blocks/base.block";
import { NotLoadedBlock } from "~/app/blocks/not-loaded.block";
import { AboutUsBlock } from "~/app/blocks/about-us.block";
import { ClickBaitBlock } from "~/app/blocks/click-bait.block";
import { FooterBlock } from "~/app/blocks/footer.block";
import { HalfStatsBlock } from "~/app/blocks/half-stats.block";
import { MainBannerBlock } from "~/app/blocks/main-banner.block";
import { OftenAskBlock } from "~/app/blocks/often-ask.block";
import { PersonalForecastBlock } from "~/app/blocks/personal-forecast.block";
import { WhyTrustUsBlock } from "~/app/blocks/why-trust-us.block";

export class BlocksRepository {
  private static readonly blocks: Map<string, BaseBlock> = new Map([
    [HeaderBlock.name, new HeaderBlock()],
    [AboutUsBlock.name, new AboutUsBlock()],
    [ClickBaitBlock.name, new ClickBaitBlock()],
    [FooterBlock.name, new FooterBlock()],
    [HalfStatsBlock.name, new HalfStatsBlock()],
    [MainBannerBlock.name, new MainBannerBlock()],
    [OftenAskBlock.name, new OftenAskBlock()],
    [PersonalForecastBlock.name, new PersonalForecastBlock()],
    [WhyTrustUsBlock.name, new WhyTrustUsBlock()],
    [NotLoadedBlock.name, new NotLoadedBlock()],
  ]);

  static get(name: string): BaseBlock {
    return this.blocks.get(name) ?? this.getFallbackBlock();
  }

  private static getFallbackBlock(): BaseBlock {
    return this.blocks.get(NotLoadedBlock.name)!;
  }
}
