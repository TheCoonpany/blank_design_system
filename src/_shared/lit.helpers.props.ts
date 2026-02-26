import type { LitElement } from 'lit';

export type Newable<TInstance = unknown, TArgs extends unknown[] = any[]> = new (...args: TArgs) => TInstance;

type Primitive = string | number | boolean | undefined;

type Definition<T> =
  | [type: T]
  | [type: T, 'reflect'];

export type LibraryComponent<T extends LitElement> = Newable<T> & { __name__: string; };

export type ComponentKeys<T extends LitElement> = {
  [K in keyof Required<T> as K extends keyof LitElement ? never : Required<T>[K] extends Primitive ? K : never]:
  Required<T>[K] extends string ? Definition<StringConstructor> :
  Required<T>[K] extends number ? Definition<NumberConstructor> :
  Required<T>[K] extends boolean ? Definition<BooleanConstructor> :
  never
};