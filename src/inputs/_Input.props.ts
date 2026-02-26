
export interface _Input {
  disabled?: boolean;
  readonly?: boolean;
};

export interface BooleanInput extends _Input {
  value?: boolean;
};

// Inputs

export interface Input<T extends string | number> extends _Input {
  value?: T;
};

export interface MultiInput<T extends string | number> extends _Input {
  value?: readonly T[];
};

export interface RangeInput<T extends string | number> extends _Input {
  value?: readonly [T, T];
};

// Selects

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
