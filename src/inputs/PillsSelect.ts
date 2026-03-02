import { html, unsafeCSS } from 'lit';

import SCSS from './PillsSelect.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { PillsSelect_Props } from './PillsSelect.props';

export class AppPillsSelect extends Component implements PillsSelect_Props {
  static __name__ = `${Component.prefix}-pills-select` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppPillsSelect, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppPillsSelect.__name__]: AppPillsSelect;
  }
}
