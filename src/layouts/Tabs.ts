import { html, unsafeCSS } from 'lit';

import SCSS from './Tabs.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Tabs_Props } from './Tabs.props';

export class AppTabs extends Component implements Tabs_Props {
  static __name__ = `${Component.prefix}-tabs` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppTabs, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppTabs.__name__]: AppTabs;
  }
}
