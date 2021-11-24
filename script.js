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

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/11/2021'
    },
    {
        id: 2,
        description: 'Luz',
        amount: 50000,
        date: '29/11/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '24/11/2021'
    },
    {
        id: 4,
        description: 'app',
        amount: 200000,
        date: '30/11/2021'
    },
    
]

const Transiction = {

    incomes(){
        //somar as entradas 
    },

    expenses(){
        // somar as saidas
    },

    total(){
        // incomes - expenses
    }

}


// Substituir os dados do  HTML com os dados do JS

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    
    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    
    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "income" : "expense"              //if & else 

        const amount = Utils.formaCurrency(transaction.amount)

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
            <img src="assets/minus.svg" alt="remover">
            </td>
        `
        return html
    }
}


const Utils = {
    formaCurrency(value){
        const signal = Number(value) < 0 ? "-" : "+git"
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})