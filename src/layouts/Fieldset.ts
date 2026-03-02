import { html, unsafeCSS } from 'lit';

import SCSS from './Fieldset.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Fieldset_Props } from './Fieldset.props';

export class AppFieldset extends Component implements Fieldset_Props {
  static __name__ = `${Component.prefix}-fieldset` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppFieldset, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppFieldset.__name__]: AppFieldset;
  }
}
