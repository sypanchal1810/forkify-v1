import View from './View.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _overlay = document.querySelector('.overlay');
  _window = document.querySelector('.add-recipe-window');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  _message = 'Recipe was successfully uploaded ;)';

  constructor() {
    super();
    this.addHandlerOpenWindow();
    this.addHandlerCloseWindow();
  }

  tooggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  addHandlerOpenWindow() {
    this._btnOpen.addEventListener('click', this.tooggleWindow.bind(this));
  }

  addHandlerCloseWindow() {
    this._btnClose.addEventListener('click', this.tooggleWindow.bind(this));
    this._overlay.addEventListener('click', this.tooggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = Object.fromEntries([...new FormData(this)]);
      handler(data);
    });
  }
}

export default new AddRecipeView();
