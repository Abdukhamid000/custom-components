<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useAccordion } from "./useAccordion";
const props = defineProps<{
  modelValue: string[] | string | number;
  accordion?: boolean;
}>();

useAccordion(props);
</script>

<style scoped></style>
