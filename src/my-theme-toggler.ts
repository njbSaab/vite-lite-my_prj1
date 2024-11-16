import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-theme-toggler')
export class MyThemeToggler extends LitElement {
  @property({ type: String }) theme: 'dark' | 'light' = 'dark';

  static styles = css`
    .btn {
      cursor: pointer;
      background: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      transition: background 0.3s;
    }

    .btn:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    svg {
      width: 32px;
      height: 32px;
      fill: currentColor;
    }
  `;

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', this.theme);
  }

  render() {
    return html`
      <div class="controlls">
        <button class="btn" @click="${this.toggleTheme}">
          ${this.theme === 'dark'
            ? html`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"
                  />
                </svg>
              `
            : html`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M9.5 4c-.34 0-.68.02-1.01.07C10.4 6.23 11.5 9.05 11.5 12s-1.1 5.77-3.01 7.93c.33.05.67.07 1.01.07c4.41 0 8-3.59 8-8s-3.59-8-8-8"
                    opacity=".3"
                  />
                  <path
                    d="M9.5 2c-1.82 0-3.53.5-5 1.35c2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35c5.52 0 10-4.48 10-10S15.02 2 9.5 2m0 18c-.34 0-.68-.02-1.01-.07c1.91-2.16 3.01-4.98 3.01-7.93s-1.1-5.77-3.01-7.93C8.82 4.02 9.16 4 9.5 4c4.41 0 8 3.59 8 8s-3.59 8-8 8"
                  />
                </svg>
              `}
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-theme-toggler': MyThemeToggler;
  }
}
