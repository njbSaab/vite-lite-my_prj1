import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('my-logo')
export class MyElement extends LitElement {

  render() {
    return html`
      <div>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
    `
  }


  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      text-align: center;
    }

    .logo {
      height: 4em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    @media (prefers-color-scheme: light) {

    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-logo': MyElement
  }
}
