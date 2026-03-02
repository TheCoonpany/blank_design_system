import { html, unsafeCSS } from 'lit';

import SCSS from './DateInput.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { DateInput_Props } from './DateInput.props';

export class AppDateInput extends Component implements DateInput_Props {
  static __name__ = `${Component.prefix}-date-input` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppDateInput, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppDateInput.__name__]: AppDateInput;
  }
}
