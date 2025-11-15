import { BaseBlock } from "~/pages/dynamic-page/blocks/base.block";

export class PersonalForecastBlock extends BaseBlock {
  public static override readonly name: string = "block_personal_forecast";
  public component = () => import("~/widgets/personal-forecast/ui/PersonalForecast.vue");
}
