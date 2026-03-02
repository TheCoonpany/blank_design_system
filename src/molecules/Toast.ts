import { html, unsafeCSS } from 'lit';

import SCSS from './Toast.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Toast_Props } from './Toast.props';

export class AppToast extends Component implements Toast_Props {
  static __name__ = `${Component.prefix}-toast` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppToast, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppToast.__name__]: AppToast;
  }
}
