import { BaseBlock } from "~/app/blocks/base.block";
import type { Component } from "vue";
import { PersonalForecast } from "~/widgets/personal-forecast";

export class PersonalForecastBlock extends BaseBlock {
  public static override readonly name: string = "block_personal_forecast";
  public component: Component = PersonalForecast;
}
