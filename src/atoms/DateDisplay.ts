import { html, unsafeCSS } from 'lit';

import SCSS from './DateDisplay.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { DateDisplay_Props } from './DateDisplay.props';

export class AppDateDisplay extends Component implements DateDisplay_Props {
  static __name__ = `${Component.prefix}-date-display` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppDateDisplay, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppDateDisplay.__name__]: AppDateDisplay;
  }
}
