import { html, unsafeCSS } from 'lit';

import SCSS from './TogglePill.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { TogglePill_Props } from './TogglePill.props';

export class AppTogglePill extends Component implements TogglePill_Props {
  static __name__ = `${Component.prefix}-toggle-pill` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppTogglePill, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppTogglePill.__name__]: AppTogglePill;
  }
}
