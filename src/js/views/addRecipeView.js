import View from './View.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';

  _window = document.querySelector('.add-recipe-window ');
  _overlay = document.querySelector('.overlay ');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHanlderShowWindow();
    this._addHandlerHideWindow();
  }
  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHanlderShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHanlderUpload(handler) {
    // 1. ++++ will connect
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      // NOTE modern way to select all data from the form
      const dataArr = [...new FormData(this)];
      //IMPORTANT New method to convert Arrays entries  into Objects
      const data = Object.fromEntries(dataArr); // Conversion to Object
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
