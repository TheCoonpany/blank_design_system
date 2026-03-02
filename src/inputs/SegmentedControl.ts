import { html, unsafeCSS } from 'lit';

import SCSS from './SegmentedControl.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { SegmentedControl_Props } from './SegmentedControl.props';

export class AppSegmentedControl extends Component implements SegmentedControl_Props {
  static __name__ = `${Component.prefix}-tooltip` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppSegmentedControl, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppSegmentedControl.__name__]: AppSegmentedControl;
  }
}
