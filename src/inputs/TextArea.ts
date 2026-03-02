import { html, unsafeCSS } from 'lit';

import SCSS from './TextArea.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { TextArea_Props } from './TextArea.props';

export class AppTextArea extends Component implements TextArea_Props {
  static __name__ = `${Component.prefix}-text-area` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppTextArea, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppTextArea.__name__]: AppTextArea;
  }
}
