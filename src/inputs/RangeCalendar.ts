import { html, unsafeCSS } from 'lit';

import SCSS from './RangeCalendar.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { RangeCalendar_Props } from './RangeCalendar.props';

export class AppRangeCalendar extends Component implements RangeCalendar_Props {
  static __name__ = `${Component.prefix}-range-calendar` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppRangeCalendar, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppRangeCalendar.__name__]: AppRangeCalendar;
  }
}
