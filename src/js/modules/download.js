export default class Download {
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg'
    }

    downloadItem(path) {
        const element = document.createElement('a');
        element.setAttribute('href', this.path);
        element.setAttribute('download', 'huihui');
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    init() {
        this.triggers.forEach(item => {
            item.addEventListener('click', () => {
                this.downloadItem(this.path)
            })
        })
    }
}
