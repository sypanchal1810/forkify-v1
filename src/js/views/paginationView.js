import View from './View.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;
      let gotoPage = btn.dataset.goto;
      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const curPage = +this._data.page;
    const numOfPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

    // Page 1 and other pages
    if (curPage === 1 && numOfPages > 1) {
      return this._nextPage(curPage);
    }
    // Last page
    if (curPage === numOfPages && numOfPages > 1) {
      return this._prevPage(curPage);
    }

    // Other Page
    if (curPage < numOfPages) {
      let markup = this._prevPage(curPage);
      markup += this._nextPage(curPage);
      return markup;
    }
  }

  _prevPage(curPage) {
    return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>
    `;
  }

  _nextPage(curPage) {
    return `
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
    `;
  }
}

export default new PaginationView();
