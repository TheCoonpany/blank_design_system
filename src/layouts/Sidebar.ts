import { html, unsafeCSS } from 'lit';

import SCSS from './Sidebar.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Sidebar_Props } from './Sidebar.props';

export class AppSidebar extends Component implements Sidebar_Props {
  static __name__ = `${Component.prefix}-sidebar` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppSidebar, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppSidebar.__name__]: AppSidebar;
  }
}
