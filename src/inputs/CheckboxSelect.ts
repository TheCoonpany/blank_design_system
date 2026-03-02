import { html, unsafeCSS } from 'lit';

import SCSS from './CheckboxSelect.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { CheckboxSelect_Props } from './CheckboxSelect.props';

export class AppCheckboxSelect extends Component implements CheckboxSelect_Props {
  static __name__ = `${Component.prefix}-checkbox-select` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppCheckboxSelect, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppCheckboxSelect.__name__]: AppCheckboxSelect;
  }
}
