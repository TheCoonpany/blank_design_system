import { html, LitElement, unsafeCSS } from 'lit';

import SCSS from './Button.scss?inline';
import { __lit } from '../_shared/lit.helpers';

export class Button extends LitElement {
  static __name__ = 'app-button' as const;

  public text?: string;

  render() {
    return html`
      <button>
        <slot>${this.text}</slot>
      </button>
    `;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(Button, {
  text: [String],
});

declare global {
  interface HTMLElementTagNameMap {
    'app-button': Button;
  }
}