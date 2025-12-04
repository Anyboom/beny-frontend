import { computed, type MaybeRefOrGetter, toValue } from "vue";

export function useColumns<T>(items: MaybeRefOrGetter<T[]>, columnsCount = 2) {
  const columns = computed(() => {
    const result: T[][] = Array.from({ length: columnsCount }, () => []);

    toValue(items).forEach((item, index) => {
      const columnIndex = index % columnsCount;

      result?.[columnIndex]?.push(item);
    });

    return result;
  });

  return { columns };
}
