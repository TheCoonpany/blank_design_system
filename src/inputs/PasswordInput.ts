import { html, unsafeCSS } from 'lit';

import SCSS from './PasswordInput.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { PasswordInput_Props } from './PasswordInput.props';

export class AppPasswordInput extends Component implements PasswordInput_Props {
  static __name__ = `${Component.prefix}-password-input` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppPasswordInput, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppPasswordInput.__name__]: AppPasswordInput;
  }
}
