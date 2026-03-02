import { html, unsafeCSS } from 'lit';

import SCSS from './Badge.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Badge_Props } from './Badge.props';

export class AppBadge extends Component implements Badge_Props {
  static __name__ = `${Component.prefix}-badge` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppBadge, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppBadge.__name__]: AppBadge;
  }
}
