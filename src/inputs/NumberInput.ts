import { html, unsafeCSS } from 'lit';

import SCSS from './NumberInput.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { NumberInput_Props } from './NumberInput.props';

export class AppNumberInput extends Component implements NumberInput_Props {
  static __name__ = `${Component.prefix}-number-input` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppNumberInput, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppNumberInput.__name__]: AppNumberInput;
  }
}
