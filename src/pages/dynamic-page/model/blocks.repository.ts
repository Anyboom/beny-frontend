import { HeaderBlock } from "~/pages/dynamic-page/blocks/header.block";
import type { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";
import { NotLoadedBlock } from "~/pages/dynamic-page/blocks/not-loaded.block";
import { AboutUsBlock } from "~/pages/dynamic-page/blocks/about-us.block";
import { ClickBaitBlock } from "~/pages/dynamic-page/blocks/click-bait.block";
import { FooterBlock } from "~/pages/dynamic-page/blocks/footer.block";
import { HalfStatsBlock } from "~/pages/dynamic-page/blocks/half-stats.block";
import { MainBannerBlock } from "~/pages/dynamic-page/blocks/main-banner.block";
import { OftenAskBlock } from "~/pages/dynamic-page/blocks/often-ask.block";
import { PersonalForecastBlock } from "~/pages/dynamic-page/blocks/personal-forecast.block";
import { WhyTrustUsBlock } from "~/pages/dynamic-page/blocks/why-trust-us.block";
import { FullStatsBlock } from "~/pages/dynamic-page/blocks/full-stats.block";

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
    [FullStatsBlock.name, new FullStatsBlock()],
  ]);

  static get(name: string): BaseBlock {
    return this.blocks.get(name) ?? this.getFallbackBlock();
  }

  private static getFallbackBlock(): BaseBlock {
    return this.blocks.get(NotLoadedBlock.name)!;
  }
}
