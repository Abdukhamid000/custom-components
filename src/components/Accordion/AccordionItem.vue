<template>
  <div>
    <button @click="handleHeaderClick">
      <slot name="title">{{ title }}</slot>
      <span>-</span>
    </button>

    <!-- v-show="isActive" -->
    <div role="region">
      <collapse-transition>
        <div v-show="isActive">
          <slot />
        </div>
      </collapse-transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IAccordionItemProps } from "./types";
import { useAccordionItem } from "./useAccordionItem";
import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";

const props = defineProps<IAccordionItemProps>();

const { handleHeaderClick, isActive } = useAccordionItem(props);
</script>

<style scoped></style>
