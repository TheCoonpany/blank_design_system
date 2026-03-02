import { html, unsafeCSS } from 'lit';

import SCSS from './MultiSelect.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { MultiSelect_Props } from './MultiSelect.props';

export class AppMultiSelect extends Component implements MultiSelect_Props {
  static __name__ = `${Component.prefix}-multi-select` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppMultiSelect, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppMultiSelect.__name__]: AppMultiSelect;
  }
}
