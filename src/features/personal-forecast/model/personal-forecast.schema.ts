import * as v from "valibot";

export const personalForecastSchema = v.object({
  name: v.pipe(v.string(), v.nonEmpty("Поле является обязательным для заполнения")),
  coefficient: v.pipe(v.string(), v.nonEmpty("Поле является обязательным для заполнения")),
  communicationMethod: v.pipe(v.string(), v.nonEmpty("Поле является обязательным для заполнения")),
  message: v.pipe(v.string(), v.nonEmpty("Поле является обязательным для заполнения")),
});
