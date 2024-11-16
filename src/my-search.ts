import { Position } from './../node_modules/tailwindcss/node_modules/postcss/lib/node.d';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-search')
export class MySearch extends LitElement {
  @property({ type: Array }) results = [];

  static styles = css`
    :host {
      display: block;
      width: 100%;
      text-align: center;
    }
    .search{
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .search-container {
        position: relative;
        display: inline-block;
        width: 70%;
        max-width: 400px;
        transform: translate(-25px);
    }

    .search-input {
      width: 100%;
      padding: 12px 48px 12px 16px;
      font-size: 16px;
      border: 2px solid transparent;
      border-radius: 8px;
      background-color: var(--input-bg, #f5f5f5);
      color: var(--input-text, #333);
      transition: border-color 0.3s, box-shadow 0.3s;
      outline: none;
    }

    .search-input:focus {
      border-color: var(--input-border-focus, #646cff);
      box-shadow: 0 0 8px rgba(100, 108, 255, 0.3);
    }

    .search-icon {
      position: absolute;
      right: -55px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      fill: var(--icon-color, #999);
      pointer-events: none;
    }

    .search-input:hover ~ .search-icon {
      fill: var(--icon-hover, #646cff);
    }

    .search-input:focus ~ .search-icon {
      fill: var(--icon-focus, #646cff);
    }

    .results {
        margin-top: 16px;
        text-align: left;
        max-height: 300px;
        overflow-y: auto;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        background-color: var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity, 1)));
        position: absolute;
        top: 0;
        margin: 55px 0;
        width: 100%;
    }

    .result-item {
      padding: 8px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .result-item:last-child {
      border-bottom: none;
    }

    .result-item:hover {
      background-color: var(--hover-bg, #f0f0f0);
    }
  `;

  handleSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value.trim();

    if (!query) {
      this.results = [];
      return;
    }

    // API запрос для поиска продуктов
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        this.results = data.products || [];
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        this.results = [];
      });
  }

  render() {
    return html`
     <div class="search">
      <div class="search-container">
        <!-- Поле ввода -->
        <input
          type="text"
          class="search-input"
          placeholder="Type to search..."
          @input="${this.handleSearch}"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="search-icon"
          viewBox="0 0 24 24"
        >
          <path
            d="M11 2a9 9 0 105.656 15.657l4.69 4.69a1 1 0 001.415-1.415l-4.69-4.69A9 9 0 0011 2zm0 2a7 7 0 110 14 7 7 0 010-14z"
          />
        </svg>
      </div>

      <!-- Результаты -->
      <div class="results">
        ${this.results.map(
          (item) =>
            html`<div class="result-item" @click="${() => this.selectItem(item)}">
              ${item.title}
            </div>`
        )}
      </div>
    </div>
    `;
  }

  selectItem(item: any) {
    console.log('Selected item:', item);
    alert(`Вы выбрали: ${item.title}`);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-search': MySearch;
  }
}
