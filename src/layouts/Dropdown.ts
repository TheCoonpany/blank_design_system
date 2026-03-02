import { html, unsafeCSS } from 'lit';

import SCSS from './Dropdown.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Dropdown_Props } from './Dropdown.props';

export class AppDropdown extends Component implements Dropdown_Props {
  static __name__ = `${Component.prefix}-dropdown` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppDropdown, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppDropdown.__name__]: AppDropdown;
  }
}
