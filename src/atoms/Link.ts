import { html, unsafeCSS } from 'lit';

import SCSS from './Link.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Link_Props } from './Link.props';

export class AppLink extends Component implements Link_Props {
  static __name__ = `${Component.prefix}-link` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppLink, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppLink.__name__]: AppLink;
  }
}
