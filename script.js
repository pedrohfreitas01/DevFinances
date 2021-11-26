
//========== Aparecer o form de nova transição 
const Modal = {
    open(){
        //abrir modal
        // adicionar a class active ao modal

      document.querySelector('.modal-overlay').classList.add('active')
        // Vai no arquivo CSS procura o modal-overlay , aplica uma lista de classe , dessa lista iremos usar o 'add' que ira adicionar o 'active' , ja estilizado no css .
    },

    close(){
      // fechar o modal 
      //remover a class actie do modal
      document.querySelector('.modal-overlay').classList.remove('active')
    }
}


