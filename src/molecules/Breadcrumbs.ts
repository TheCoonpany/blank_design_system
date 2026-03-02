import { html, unsafeCSS } from 'lit';

import SCSS from './Breadcrumbs.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Breadcrumbs_Props } from './Breadcrumbs.props';

export class AppBreadcrumbs extends Component implements Breadcrumbs_Props {
  static __name__ = `${Component.prefix}-breadcrumbs` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppBreadcrumbs, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppBreadcrumbs.__name__]: AppBreadcrumbs;
  }
}
