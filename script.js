let numero = 0

function aumentar(value) {

    numero += value

    update()

}

function anular() {
    numero = 0
    update()
}

function update() {
    const p = document.querySelector('#resultado')
    p.innerText = numero.toString()
    update()
}