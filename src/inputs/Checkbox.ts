import { html, unsafeCSS } from 'lit';

import SCSS from './Checkbox.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Checkbox_Props } from './Checkbox.props';

export class AppCheckbox extends Component implements Checkbox_Props {
  static __name__ = `${Component.prefix}-tooltip` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppCheckbox, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppCheckbox.__name__]: AppCheckbox;
  }
}
