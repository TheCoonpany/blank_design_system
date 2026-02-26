import type { _Input } from './_Input.props';

interface _Select<T extends string | number> extends _Input {
  options?: readonly Option<T>[];
};

export interface Option<T extends string | number> {
  value: T;
  disabled?: boolean;
}

export interface Select<T extends string | number> extends _Select<T> {
  value?: T;
};

export interface MultiSelect<T extends string | number> extends _Select<T> {
  value?: readonly T[];
}
