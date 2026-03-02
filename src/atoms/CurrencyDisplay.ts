import { html, unsafeCSS } from 'lit';

import SCSS from './CurrencyDisplay.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { CurrencyDisplay_Props } from './CurrencyDisplay.props';

export class AppCurrencyDisplay extends Component implements CurrencyDisplay_Props {
  static __name__ = `${Component.prefix}-currency-display` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppCurrencyDisplay, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppCurrencyDisplay.__name__]: AppCurrencyDisplay;
  }
}
