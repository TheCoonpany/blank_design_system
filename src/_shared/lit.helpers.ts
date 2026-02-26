import { property, customElement } from 'lit/decorators.js';

import type { LitElement } from 'lit';
import type { ComponentKeys, LibraryComponent } from './lit.helpers.props';

export function __lit<T extends LitElement>(
  element: LibraryComponent<T>,
  props: ComponentKeys<T>,
) {
  __defineElement(element);
  __properties(element, props);
}

function __defineElement(element: LibraryComponent<LitElement>): void {
  if (!customElements.get(element.__name__)) customElement(element.__name__)(element);
}

function __properties<T extends LitElement>(element: LibraryComponent<T>, props: ComponentKeys<T>) {
  for (const [key, value] of Object.entries(props)) {
    __decorateClass([property({
      type: value[0],
      reflect: value[1],
    })], element.prototype, key);
  }
  return element;
}

function __decorateClass(decorators: PropertyDecorator[], target: any, key: string | symbol) {
  let result;
  for (let i = decorators.length - 1, decorator; i >= 0; i--) {
    if (decorator = decorators[i])
      result ||= decorator(target, key, result);
  }
  if (result) Object.defineProperty(target, key, result);
  return result;
}