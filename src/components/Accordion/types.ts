import type { InjectionKey, Ref } from "vue";

export interface IAccordionProps {
  modelValue: string[] | string | number;
  accordion?: boolean;
}

export interface IAccordionItemProps {
  name: string | number;
  title: string;
  disabled?: boolean;
}

export interface CollapseContext {
  activeNames: Ref<string[] | number[]>;
  handleItemClick: (name: string | number) => void;
}

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol("collapseContextKey");
