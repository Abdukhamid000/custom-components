<template>
  <div>
    <pre>{{ activeItems }}</pre>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";

const props = defineProps<{
  accordion?: boolean;
}>();
const activeItems = ref([]);

provide("collapse", { activeItems, accordion: props.accordion });
</script>

<style scoped></style>
