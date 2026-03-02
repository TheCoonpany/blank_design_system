import { html, unsafeCSS } from 'lit';

import SCSS from './Image.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { Image_Props } from './Image.props';

export class AppImage extends Component implements Image_Props {
  static __name__ = `${Component.prefix}-image` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppImage, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppImage.__name__]: AppImage;
  }
}
