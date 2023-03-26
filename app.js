
class AppleWatch {

    constructor() {
        setInterval(this.doDynamic, 1000)
    }

    doDynamic() {
        const div = document.querySelector(`.data`)

        const now = new Date();
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const second = now.getSeconds();

        div.innerHTML = `${hour}:${minutes}:${second}`
        document.querySelector(`.my_year`).innerHTML = now.getFullYear()
    }
}


const appleWatch = new AppleWatch();
appleWatch.doDynamic()
// console.log(appleWatch.doDynamic());