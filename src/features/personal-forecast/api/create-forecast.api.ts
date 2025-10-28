import type { PersonalForecastInput } from "~/features/personal-forecast/model/personal-forecast.schema";

export function createForecastApi(personalForecastInput: PersonalForecastInput) {
  return $fetch("https://directus.localhost/items/form_personal_forecast", {
    method: "post",
    body: {
      name: personalForecastInput.name,
      coefficient: personalForecastInput.coefficient,
      communication_method: personalForecastInput.communicationMethod,
      message: personalForecastInput.message,
    },
  });
}
