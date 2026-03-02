import { html, unsafeCSS } from 'lit';

import SCSS from './LinearSelect.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { LinearSelect_Props } from './LinearSelect.props';

export class AppLinearSelect extends Component implements LinearSelect_Props {
  static __name__ = `${Component.prefix}-linear-select` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppLinearSelect, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppLinearSelect.__name__]: AppLinearSelect;
  }
}
