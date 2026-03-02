import { html, unsafeCSS } from 'lit';

import SCSS from './Accordion.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Accordion_Props } from './Accordion.props';

export class AppAccordion extends Component implements Accordion_Props {
  static __name__ = `${Component.prefix}-accordion` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppAccordion, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppAccordion.__name__]: AppAccordion;
  }
}
