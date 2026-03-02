import { html, unsafeCSS } from 'lit';

import SCSS from './Pagination.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Pagination_Props } from './Pagination.props';

export class AppPagination extends Component implements Pagination_Props {
  static __name__ = `${Component.prefix}-pagination` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppPagination, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppPagination.__name__]: AppPagination;
  }
}
