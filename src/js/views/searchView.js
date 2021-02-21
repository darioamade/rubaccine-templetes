class SearchView {
  // class search is the parent el that we are going to selecet
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearUnput();
    return query;
  }
  _clearUnput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addhandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
