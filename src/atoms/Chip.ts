import { html, unsafeCSS } from 'lit';

import SCSS from './Chip.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Chip_Props } from './Chip.props';

export class AppChip extends Component implements Chip_Props {
  static __name__ = `${Component.prefix}-chip` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppChip, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppChip.__name__]: AppChip;
  }
}
