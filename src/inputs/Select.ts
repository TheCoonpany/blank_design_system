import { html, unsafeCSS } from 'lit';

import SCSS from './Select.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Select_Props } from './Select.props';

export class AppSelect extends Component implements Select_Props {
  static __name__ = `${Component.prefix}-select` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppSelect, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppSelect.__name__]: AppSelect;
  }
}
