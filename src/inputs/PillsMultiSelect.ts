import { html, unsafeCSS } from 'lit';

import SCSS from './PillsMultiSelect.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { PillsMultiSelect_Props } from './PillsMultiSelect.props';

export class AppPillsMultiSelect extends Component implements PillsMultiSelect_Props {
  static __name__ = `${Component.prefix}-pills-multi-select` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppPillsMultiSelect, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppPillsMultiSelect.__name__]: AppPillsMultiSelect;
  }
}
