import { html, unsafeCSS } from 'lit';

import SCSS from './TextMultiInput.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { TextMultiInput_Props } from './TextMultiInput.props';

export class AppTextMultiInput extends Component implements TextMultiInput_Props {
  static __name__ = `${Component.prefix}-text-multi-input` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppTextMultiInput, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppTextMultiInput.__name__]: AppTextMultiInput;
  }
}
