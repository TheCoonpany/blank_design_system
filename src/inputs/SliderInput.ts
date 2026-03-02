import { html, unsafeCSS } from 'lit';

import SCSS from './SliderInput.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { SliderInput_Props } from './SliderInput.props';

export class AppSliderInput extends Component implements SliderInput_Props {
  static __name__ = `${Component.prefix}-slider-input` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppSliderInput, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppSliderInput.__name__]: AppSliderInput;
  }
}
