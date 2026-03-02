import { html, unsafeCSS } from 'lit';

import SCSS from './ChipsSet.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { ChipsSet_Props } from './ChipsSet.props';

export class AppChipsSet extends Component implements ChipsSet_Props {
  static __name__ = `${Component.prefix}-chips-set` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppChipsSet, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppChipsSet.__name__]: AppChipsSet;
  }
}
