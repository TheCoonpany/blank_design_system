import { html, unsafeCSS } from 'lit';

import SCSS from './AccordionGroup.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { AccordionGroup_Props } from './AccordionGroup.props';

export class AppAccordionGroup extends Component implements AccordionGroup_Props {
  static __name__ = `${Component.prefix}-accordion-group` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppAccordionGroup, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppAccordionGroup.__name__]: AppAccordionGroup;
  }
}
