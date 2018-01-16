import '../styles/toastr.css'
class Toastr {
  constructor () {
  
  }
  warning (text, timeout) {
    if (this.toastrElem) {
      this.hide(true)
    }
    this.addToastrElement()
    this.toastrElem.classList.add('error')
    this.updateToastrElemText(text)
    this.show(timeout)
  }
  show(timeout = 2500) {
    this.toastrElem.classList.add('move-in')
    this.toastrElem.addEventListener('animationend', () => {
      this.timeoutId = setTimeout(this.hide.bind(this), timeout)
    })
  }
  hide(immediate) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    if (this.toastrElem) {
      if (immediate) {
        this.removeToastrElem()
      } else {
        this.toastrElem.classList.add('move-out')
        this.toastrElem.addEventListener('animationend', this.removeToastrElem.bind(this))
      }
    }
  }
  removeToastrElem() {
    document.body.removeChild(this.toastrElem)
    this.toastrElem = null
  }
  addToastrElement() {
    let toastrElem = this.toastrElem = document.createElement('div')
    toastrElem.classList.add('toastr-wrapper')
    document.body.appendChild(toastrElem)
  }
  updateToastrElemText(text) {
    this.toastrElem.textContent = text
  }
}

const toastr = new Toastr()

export { toastr }