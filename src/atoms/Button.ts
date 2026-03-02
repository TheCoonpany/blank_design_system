import { html, unsafeCSS } from 'lit';

import SCSS from './Button.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Button_Props } from './Button.props';

export class AppButton extends Component implements Button_Props {
  static __name__ = `${Component.prefix}-button` as const;

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

__lit(AppButton, {
  text: [String],
});

declare global {
  interface HTMLElementTagNameMap {
    [AppButton.__name__]: AppButton;
  }
}
