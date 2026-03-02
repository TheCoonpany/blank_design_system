import { html, unsafeCSS } from 'lit';

import SCSS from './Calendar.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Calendar_Props } from './Calendar.props';

export class AppCalendar extends Component implements Calendar_Props {
  static __name__ = `${Component.prefix}-calendar` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppCalendar, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppCalendar.__name__]: AppCalendar;
  }
}
