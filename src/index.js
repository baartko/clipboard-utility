/**
 * Append textarea and select text
 *
 * @param  {HTMLElement} el
 * @param  {string} text description
 */
function appendAndSelect (el, text) {
  el.value = text
  appendElement(el)
  el.select()
}

/**
 * Append element to body
 * @param {HTMLElement} el
 */
function appendElement (el) {
  document.body.appendChild(el)
}

/**
 * Apply styles to created element
 *
 * @param  {HTMLElement} el
 */
function applyStyles (el) {
  // Avoid conflicts with our current layout.
  el.style.position = 'fixed'

  // Clean up any borders.
  el.style.border = 'none'
  el.style.boxShadow = 'none'

  // Avoid flash of white box if rendered for any reason.
  el.style.background = 'transparent'
}

/**
 * Execute copy command and run callbacks
 * @param {object} params
 */
function exec (elem, callback) {
  let o = { type: 'success', value: elem.value }
  try {
    document.execCommand('copy')
  } catch (err) {
    o = { type: 'error', value: err.message }
  } finally {
    callback && callback(o)
  }

  return o
}

/**
 * Do some cleanup
 * @param {HTMLElement} el
 */
function clean (el) {
  document.body.removeChild(el)
}

/**
 * Create DOM element
 */
function createElement () {
  return document.createElement('textarea')
}

function clipboardCopy (text, callback, isTest) {
  const elem = createElement()

  // proceed
  applyStyles(elem)
  appendAndSelect(elem, text)

  const message = exec(elem, callback)
  clean(elem)

  return isTest ? { elem, message } : message
}

module.exports = clipboardCopy
