import { html, unsafeCSS } from 'lit';

import SCSS from './Form.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Form_Props } from './Form.props';

export class AppForm extends Component implements Form_Props {
  static __name__ = `${Component.prefix}-form` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppForm, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppForm.__name__]: AppForm;
  }
}
