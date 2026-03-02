import { html, unsafeCSS } from 'lit';

import SCSS from './Tag.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Tag_Props } from './Tag.props';

export class AppTag extends Component implements Tag_Props {
  static __name__ = `${Component.prefix}-tag` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppTag, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppTag.__name__]: AppTag;
  }
}
