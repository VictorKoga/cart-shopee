// importando o arquivo ITEM.JS
import createItem from './services/item.js';
// importando todas as funcoes dentro do CART.JS
import * as cartService from './services/cart.js';

const myCart = [];
const myWhishList= [];

console.log("Welcome to the your Shopee Cart!");
// cria o item
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);
// adiciona 2 itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
// remove um item
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

// exibe o carrinho
await cartService.displayCart(myCart);
// deleta dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);

