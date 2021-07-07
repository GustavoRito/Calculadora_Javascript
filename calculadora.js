const displayValorAnterior = document.getElementById('valor-anterior')
const displayValorActual = document.getElementById('valor-actual')
const botonesNumeros = document.querySelectorAll('.numero')
const botonesOperadores = document.querySelectorAll('.operador')

const display = new Display(displayValorAnterior, displayValorActual)

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.innerHTML);
    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        display.computar(boton.value);
    })
});

























/* let op;
document.querySelector('#suma').addEventListener('click', () => {
    op = '+'
});
document.querySelector('#resta').addEventListener('click', () => {
    op = '-'
});
document.querySelector('#multi').addEventListener('click', () => {
    op = '*'
});
document.querySelector('#division').addEventListener('click', () => {
    op = '/'
});
document.querySelector('#calcular').addEventListener('click', () => {
    const n1 = parseInt(document.querySelector('#n1').value);
    const n2 = parseInt(document.querySelector('#n2').value);
    //const op = document.querySelector('#op').value;
    let r;
    if (op == '+') {
        r = n1 + n2;
    } else if (op == '-') {
        r = n1 - n2;
    } else if (op == '*') {
        r = n1 * n2
    } else if (op == '/') {
        r = n1 / n2;

    }

    document.querySelector('#r').innerHTML = r;
}); */