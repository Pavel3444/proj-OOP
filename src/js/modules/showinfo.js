export default class ShowInfo {
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers);
    }

    init() {
        this.triggers.forEach(btn => {
            btn.addEventListener('click', () => {
               const sibling = btn.closest('.module__info-show').nextElementSibling;
               sibling.classList.toggle('msg')
            })
        })
    }
}
