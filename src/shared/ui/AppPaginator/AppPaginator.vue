<script setup lang="ts">
  import { computed } from "vue";

  interface Props {
    currentPage: number;
    itemsPerPage?: number;
    totalItems: number;
  }

  const { currentPage, totalItems, itemsPerPage = 10 } = defineProps<Props>();

  const emit = defineEmits(["page-changed"]);

  const totalPages = computed(() => Math.ceil(totalItems / itemsPerPage));

  const visiblePagesCount = 5;

  const visiblePages = computed<number[]>(() => {
    const pages = [];
    const halfVisible = Math.floor(visiblePagesCount / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages.value, startPage + visiblePagesCount - 1);

    if (endPage - startPage + 1 < visiblePagesCount) {
      startPage = Math.max(1, endPage - visiblePagesCount + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  });

  const showFirstPage = computed(() => {
    const item = visiblePages.value[0];

    if (item) {
      return item > 1;
    }

    return false;
  });

  const showLastPage = computed(() => {
    const item = visiblePages.value[visiblePages.value.length - 1];

    if (item) {
      return item < totalPages.value;
    }

    return false;
  });

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages.value && page !== currentPage) {
      emit("page-changed", page);
    }
  }
</script>

<template>
  <nav
    v-if="totalPages > 1"
    class="app-paginator"
  >
    <ul class="app-paginator__list">
      <li v-if="showFirstPage">
        <button
          class="app-paginator__button"
          @click="goToPage(1)"
        >
          <Icon name="charm:chevrons-left" />
        </button>
      </li>

      <li>
        <button
          class="app-paginator__button"
          :class="{ disabled: currentPage === 1 }"
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
        >
          <Icon name="charm:chevron-left" />
        </button>
      </li>

      <li
        v-for="page in visiblePages"
        :key="page"
      >
        <button
          class="app-paginator__button"
          :class="{ active: page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
      </li>

      <li>
        <button
          class="app-paginator__button"
          :class="{ disabled: currentPage === totalPages }"
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
        >
          <Icon name="charm:chevron-right" />
        </button>
      </li>

      <li v-if="showLastPage">
        <button
          class="app-paginator__button"
          @click="goToPage(totalPages)"
        >
          <Icon name="charm:chevrons-right" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  @use "@/shared/assets/styles/typography" as *;
  @use "@/shared/assets/styles/variables" as *;
  @use "@/shared/assets/styles/mixins" as *;

  .app-paginator {
    margin: $spacing-2 0;

    &__list {
      display: flex;
      width: fit-content;

      border-radius: $spacing-1;
      overflow: hidden;
    }

    &__button {
      padding: $spacing-1 $spacing-2;
      background-color: white;
      color: $color-text;
      cursor: pointer;
      transition: $transition-default;

      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;

      &.active {
        background-color: $color-accent;
        color: $color-default-white;
      }

      &.disabled {
        opacity: $opacity-disabled;
        cursor: not-allowed;
      }

      &:hover:not(.disabled) {
        background-color: $color-accent;
        color: $color-default-white;
      }
    }
  }
</style>
