import { html, unsafeCSS } from 'lit';

import SCSS from './LangSelect.scss?inline';
import { Component, __lit } from '../_shared/lit';
import { LangSelect_Props } from './LangSelect.props';

export class AppLangSelect extends Component implements LangSelect_Props {
  static __name__ = `${Component.prefix}-lang-select` as const;

  render() {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

__lit(AppLangSelect, {
  //
});

declare global {
  interface HTMLElementTagNameMap {
    [AppLangSelect.__name__]: AppLangSelect;
  }
}
