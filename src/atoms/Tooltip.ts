import { html, unsafeCSS } from 'lit';

import SCSS from './Tooltip.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Tooltip_Props } from './Tooltip.props';

export class AppTooltip extends Component implements Tooltip_Props {
  static __name__ = `${Component.prefix}-tooltip` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppTooltip, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppTooltip.__name__]: AppTooltip;
  }
}
