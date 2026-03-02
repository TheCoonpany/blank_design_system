import { html, unsafeCSS } from 'lit';

import SCSS from './NumberDisplay.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { NumberDisplay_Props } from './NumberDisplay.props';

export class AppNumberDisplay extends Component implements NumberDisplay_Props {
  static __name__ = `${Component.prefix}-number-display` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppNumberDisplay, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppNumberDisplay.__name__]: AppNumberDisplay;
  }
}
