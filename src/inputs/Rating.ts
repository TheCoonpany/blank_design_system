import { html, unsafeCSS } from 'lit';

import SCSS from './Rating.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Rating_Props } from './Rating.props';

export class AppRating extends Component implements Rating_Props {
  static __name__ = `${Component.prefix}-rating` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppRating, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppRating.__name__]: AppRating;
  }
}
