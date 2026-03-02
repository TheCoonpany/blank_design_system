import { html, unsafeCSS } from 'lit';

import SCSS from './Modal.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Modal_Props } from './Modal.props';

export class AppModal extends Component implements Modal_Props {
  static __name__ = `${Component.prefix}-modal` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppModal, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppModal.__name__]: AppModal;
  }
}
