import { html, unsafeCSS } from 'lit';

import SCSS from './TimeInput.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { TimeInput_Props } from './TimeInput.props';

export class AppTimeInput extends Component implements TimeInput_Props {
  static __name__ = `${Component.prefix}-time-input` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppTimeInput, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppTimeInput.__name__]: AppTimeInput;
  }
}
