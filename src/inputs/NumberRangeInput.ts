import { html, unsafeCSS } from 'lit';

import SCSS from './NumberRangeInput.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { NumberRangeInput_Props } from './NumberRangeInput.props';

export class AppNumberRangeInput extends Component implements NumberRangeInput_Props {
  static __name__ = `${Component.prefix}-number-range-input` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppNumberRangeInput, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppNumberRangeInput.__name__]: AppNumberRangeInput;
  }
}
