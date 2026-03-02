import { html, unsafeCSS } from 'lit';

import SCSS from './Card.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Card_Props } from './Card.props';

export class AppCard extends Component implements Card_Props {
  static __name__ = `${Component.prefix}-card` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppCard, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppCard.__name__]: AppCard;
  }
}
