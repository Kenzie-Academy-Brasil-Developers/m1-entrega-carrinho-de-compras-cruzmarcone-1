const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }
]

function soma(){
    let a = 0
    for (let i = 0; i < productsCart.length; i++){
        a += productsCart[i].price
    }
    return a
}

let principal = document.createElement('main')
let titulo = document.createElement('h1')
    titulo.innerText = 'Virtual Market'
let containerDescricao = document.createElement('div')
    containerDescricao.classList.add('descricao')
let nomeItem = document.createElement('span')
    nomeItem.innerText = 'Item'
let precoItem = document.createElement('Preço')
    precoItem.innerText = 'Preço'
let listaCompra = document.createElement('ul')

let secao = document.createElement('section')
let containerTotal = document.createElement('div')
    containerTotal.classList.add('total')
let textoTotal = document.createElement('span')
    textoTotal.innerText = 'Total'
let valorTotal = document.createElement('span')
    valorTotal.innerText = `R$ ${soma()}`
let botao = document.createElement('button')
    botao.innerText = 'Finalizar Compra'


for (let i = 0; i < productsCart.length; i++){
    let item = document.createElement('li')
    let produto = document.createElement('span')
        produto.innerText = productsCart[i].name
    let preco = document.createElement('span')
        preco.innerText = `R$ ${productsCart[i].price}`

    item.appendChild(produto)
    item.appendChild(preco)
    listaCompra.appendChild(item)
}

containerDescricao.appendChild(nomeItem)
containerDescricao.appendChild(precoItem)
principal.appendChild(titulo)
principal.appendChild(containerDescricao)
principal.appendChild(listaCompra)

containerTotal.appendChild(textoTotal)
containerTotal.appendChild(valorTotal)
secao.appendChild(containerTotal)
secao.appendChild(botao)

document.querySelector('body').appendChild(principal)
document.querySelector('body').appendChild(secao)