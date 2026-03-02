import { html, unsafeCSS } from 'lit';

import SCSS from './RadioSelect.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { RadioSelect_Props } from './RadioSelect.props';

export class AppRadioSelect extends Component implements RadioSelect_Props {
  static __name__ = `${Component.prefix}-radio-select` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppRadioSelect, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppRadioSelect.__name__]: AppRadioSelect;
  }
}
