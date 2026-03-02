import { html, unsafeCSS } from 'lit';

import SCSS from './ToggleIcon.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { ToggleIcon_Props } from './ToggleIcon.props';

export class AppToggleIcon extends Component implements ToggleIcon_Props {
  static __name__ = `${Component.prefix}-toggle-icon` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppToggleIcon, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppToggleIcon.__name__]: AppToggleIcon;
  }
}
