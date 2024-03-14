import type { IAccordionProps } from "./types";
import { computed, provide, ref, watch } from "vue";
import { collapseContextKey } from "./types";

export const ensureArray = <T>(arr: T): T[] => {
  if (!arr && (arr as any) !== 0) return [];
  return Array.isArray(arr) ? arr : [arr];
};

export function useAccordion(props: IAccordionProps) {
  const activeNames = ref(ensureArray(props.modelValue));

  const setActiveNames = (_activeNames: string[] | number[]) => {
    activeNames.value = _activeNames;

    console.log(activeNames.value, "ARRAY");

    // const value = props.accordion ? activeNames.value[0] : activeNames.value;
  };

  const handleClickItem = (name: string | number) => {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? "" : name]);
      return;
    }

    const _activeNames = [...activeNames.value];

    const index = _activeNames.indexOf(name);

    if (~index) {
      _activeNames.splice(index, 1);
    } else {
      _activeNames.push(name);
    }

    setActiveNames(_activeNames as string[]);
  };

  watch(
    () => props.modelValue,
    () => (activeNames.value = ensureArray(props.modelValue)),
    { deep: true }
  );

  provide(collapseContextKey, {
    activeNames,
    handleClickItem,
  });

  return {
    activeNames,
    handleClickItem,
  };
}
