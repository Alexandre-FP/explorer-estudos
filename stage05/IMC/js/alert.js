const AlertError = {
    elemente: document.querySelector('.alert-error'),
    open() {
        AlertError.elemente.classList.add('open')
    },
    close() {
        AlertError.elemente.classList.remove('open')
    }
}

export { AlertError }
