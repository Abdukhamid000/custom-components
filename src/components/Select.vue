<template>
  <div class="relative bg-red-100 max-w-96">
    <button
      @click="showSelector"
      type="button"
      class="pl-3 pt-1.5 pr-10 pb-1.5 w-full relative block min-h-9"
    >
      <div>
        <span
          class="text-ellipsis whitespace-nowrap overflow-hidden block truncate"
        >
          {{ renderItems }}
        </span>
      </div>
      <span
        class="flex items-center justify-center absolute right-0 pr-2 top-0 pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          class="nz sb axo"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
    </button>
    <ul v-if="show" class="overflow-auto z-10 absolute bg-red-200 w-full">
      <li
        @click="selectItem(item)"
        class="cursor-pointer hover:bg-red-400"
        v-for="(item, i) of items"
        :key="i"
      >
        <input type="checkbox" :checked="modelValue.includes(item)" />
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  modelValue: string[];
  multiple?: boolean;
  items: string[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", val: string[]): void;
}>();

const renderItems = computed(() => {
  return props.modelValue.join(", ");
});

const show = ref(false);

function showSelector() {
  show.value = !show.value;
}

const isChecked = computed(() => true);

function selectItem(item: any) {
  const index = props.modelValue.findIndex((el) => el === item);
  const add = ~index ? false : true;

  if (add) {
    if (!props.multiple) {
      emit("update:modelValue", [item]);
    } else {
      props.modelValue.push(item);
    }
  } else if (props.multiple) {
    props.modelValue.splice(index, 1);
  }

  if (!props.multiple) {
    show.value = false;
  }
}
</script>
