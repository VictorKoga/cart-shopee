// arquivo para lidar com carrinho

// quais açoes meu carrinho pode fazer
// CASOS DE USO
// 1 - adicionar item no carrinho ✅
async function addItem(userCart, item) {
  userCart.push(item);       
}

// 2 - deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// 3 - remover um item
async function removeItem(userCart, item) {
  // encontrar a posição do item dentro do indice
  const indexFound = userCart.findIndex((p) => p.name === item.name);
  // caso nao encontre o item
  if (indexFound == -1) {
    console.log("Item not found");
    return;
  }

  // item maior do que um subtrair um item, 
  if (userCart[indexFound].quantity > 1) {
    //pega o valor dentro de INDEXFOUN e diminui um item 
    userCart[indexFound].quantity -= 1;
    return
  } 
  // se um item for = a um deletar o item
  if (userCart[indexFound].quantity == 1) {
    // o splice vai cortar o item a partir do que foi encontrado dentro do INDEFOUND
    userCart.splice(indexFound, 1);
    return
  }

  //REMOVE ITEM BY INDEX
  // // transforma o indice virtual do usuario para o indice do back-end
  // const deleteIndex = index - 1;
  // //index é maior do que zero ou se é menor que o tamanho do carrinho
  // if (index >= 0 && index < userCart.length) {
  //   userCart.splice(deleteIndex, 1);
  // }
}

// 4 - calcular total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee cart total is!");
  //reduce permite interagir com os items como se fosse um for e fazer uma ação e definir um valor
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🛒Total: ${result}`);
}

async function displayCart(userCart) {
  console.log("\nShopee cart list")
  // percorre o que tem dentro do userCart
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
  });
}

export { addItem, calculateTotal, deleteItem, removeItem,displayCart, }