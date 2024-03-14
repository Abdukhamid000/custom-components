import type { IAccordionItemProps } from "./types";
import { collapseContextKey } from "./types";
import { inject, computed, unref } from "vue";

export function useAccordionItem(props: IAccordionItemProps) {
  const accordion = inject(collapseContextKey) as any;

  const name = computed(() => props.name);

  const isActive = computed(() =>
    accordion?.activeNames.value.includes(unref(name))
  );

  const handleHeaderClick = () => {
    if (props.disabled) return;
    accordion?.handleClickItem(unref(name));
  };
  console.log(accordion?.activeNames, "acco");
  return {
    isActive,
    handleHeaderClick,
  };
}
