import icons from 'url:../../img/icons.svg';

export default class View {
  _data;
  /**
   * Render the recived object to the DOM
   * @param {Object\ Object[]} data The data to rendered(e.g recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rending to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Dario Amade
   * @todo Finish implementation
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    //NOTE render method will accept data
    this._data = data;
    const markup = this._generateMarkup(); //generate html

    if (!render) return markup;

    this._clear(); // clear container
    // recipeContainer.innerHTML = ''; //NOTE before add markup empty it out the container
    this._parentElement.insertAdjacentHTML('afterbegin', markup); // add Html
  }

  _clear() {
    this._parentElement.innerHTML = ''; // NOTE clear the container
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();
    //IMPORTANT this method will convert the str to real DOM el(virtual DOM)
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*')); //Return a node list --> convert to a real array (Array.from(newDOM.querySelectorAll('*')))
    // console.log(newElements);
    //GEt all the elements in our page
    const curElements = Array.from(this._parentElement.querySelectorAll('*')); //Return a node list
    // NOTE comperarsom between both
    // console.log(curElements);
    // console.log(newElements);

    // LEC example looping over 2 arrays in the same  time
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      //   console.log(curEl, newEl.isEqualNode(curEl));

      // 👇 Update changed Text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        // console.log('💥', newEl.firstChild.nodeValue.trim());
        curEl.textContent = newEl.textContent;
      }

      // 👇 Update changed  Attributes
      if (!newEl.isEqualNode(curEl))
        // console.log(newEl.attributes);
        // console.log(Array.from(newEl.attributes));
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
        `;
    this._clear(); // clear container
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //NOTE render Error to view
  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div> 
      `;
    this._clear(); // clear container
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  //NOTE   Method for Sucess  Message
  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div> 
      `;
    this._clear(); // clear container
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
