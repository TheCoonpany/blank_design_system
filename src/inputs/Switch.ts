import { html, unsafeCSS } from 'lit';

import SCSS from './Switch.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Switch_Props } from './Switch.props';

export class AppSwitch extends Component implements Switch_Props {
  static __name__ = `${Component.prefix}-switch` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppSwitch, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppSwitch.__name__]: AppSwitch;
  }
}
