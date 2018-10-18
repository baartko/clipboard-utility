/* global describe, it */

require('jsdom-global')()
const expect = require('expect.js')

describe('Index', () => {
  beforeEach(() => {
    const body = document.body

    // cleanup nodes
    while (body.firstChild) {
      body.firstChild.remove()
    }

    document.execCommand = function () { }
  })

  it('should fail to exec copy command', () => {
    const clipboardCopy = require('../src/index')

    // we need throw error during process
    document.execCommand = () => { throw Error('CopyError') }

    const result = clipboardCopy('important_note')

    // Error thrown?
    expect(result.message.value).to.be.eql('CopyError')
  })

  it('should exec all copy logic from beggining to end', () => {
    const clipboardCopy = require('../src/index')
    let cbMessage = ''

    const elem = clipboardCopy('important_note', () => (cbMessage = 'copied'))

    const styles = window.getComputedStyle(elem)
    const { position, border, boxShadow, background } = styles

    // styles has been attached?
    expect(position).to.be.eql('fixed')
    expect(border).to.be.eql('1px solid')
    expect(boxShadow).to.be.eql('none')
    expect(background).to.be.eql('transparent')

    // copied value is correct?
    expect(elem.message.value).to.be.eql('important_note')

    // callback has been called?
    expect(cbMessage).to.be.eql('copied')

    // clean succeeded?
    expect(document.body.hasChildNodes()).not.to.be.ok()
  })
})
