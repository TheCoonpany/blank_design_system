import { html, unsafeCSS } from 'lit';

import SCSS from './Icon.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Icon_Props } from './Icon.props';

export class AppIcon extends Component implements Icon_Props {
  static __name__ = `${Component.prefix}-icon` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppIcon, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppIcon.__name__]: AppIcon;
  }
}
