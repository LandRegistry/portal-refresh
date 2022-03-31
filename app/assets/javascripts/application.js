/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

let selectElement = document.querySelector('#choose-colleague')

accessibleAutocomplete.enhanceSelectElement({
  defaultValue: '',
  selectElement: selectElement,
  minLength: 3,

})