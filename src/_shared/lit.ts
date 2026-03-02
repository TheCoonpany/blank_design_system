import { LitElement } from 'lit';

export * from './lit.helpers';

export abstract class Component extends LitElement {
  static prefix = 'app' as const;

}