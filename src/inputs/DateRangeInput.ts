import { html, unsafeCSS } from 'lit';

import SCSS from './DateRangeInput.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { DateRangeInput_Props } from './DateRangeInput.props';

export class AppDateRangeInput extends Component implements DateRangeInput_Props {
  static __name__ = `${Component.prefix}-tooltip` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppDateRangeInput, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppDateRangeInput.__name__]: AppDateRangeInput;
  }
}
