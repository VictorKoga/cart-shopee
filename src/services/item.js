// arquivo para lidar com os itens
//CASOS DE USO DOS ITENS

// 1 - criar item com sub-total certo
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity, // funcao que o item pode fazer
  }
}

export default createItem;
