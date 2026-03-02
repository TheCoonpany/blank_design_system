import { html, unsafeCSS } from 'lit';

import SCSS from './Spinner.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Spinner_Props } from './Spinner.props';

export class AppSpinner extends Component implements Spinner_Props {
  static __name__ = `${Component.prefix}-spinner` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppSpinner, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppSpinner.__name__]: AppSpinner;
  }
}
