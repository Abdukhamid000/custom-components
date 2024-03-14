<template>
  <div>
    <button @click="handleHeaderClick">
      <span v-if="title">{{ title }}</span>
      c1
    </button>

    <CollapseTransition>
      <div v-show="isActive">
        <slot />
      </div>
    </CollapseTransition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";

const props = defineProps<{
  id: string | number;
  expanded?: boolean;
  title?: string;
}>();

const collapse = inject<any>("collapse");

if (props.expanded) {
  collapse.activeItems.value.push(props.id);
}

const isActive = computed(() => collapse.activeItems.value.includes(props.id));

function handleHeaderClick() {
  if (collapse.accordion) {
    collapse.activeItems.value = isActive.value ? [] : [props.id];
  } else {
    const _activeItems = [...collapse.activeItems.value];

    const idx = _activeItems.indexOf(props.id);

    if (~idx) {
      _activeItems.splice(idx, 1);
      collapse.activeItems.value = _activeItems;
    } else {
      _activeItems.push(props.id);
      collapse.activeItems.value = _activeItems;
    }
  }
}
</script>

<style lang="scss" scoped></style>
