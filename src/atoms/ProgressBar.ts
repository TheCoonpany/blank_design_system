import { html, unsafeCSS } from 'lit';

import SCSS from './ProgressBar.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { ProgressBar_Props } from './ProgressBar.props';

export class AppProgressBar extends Component implements ProgressBar_Props {
  static __name__ = `${Component.prefix}-progress-bar` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppProgressBar, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppProgressBar.__name__]: AppProgressBar;
  }
}
