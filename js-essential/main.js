// Optional Chaining

const user = {
  name: 'Weslley',
  age: 29,
  address: {
    street: 'Rua Abacate',
    numer: 174
  },
};


// document.body.innerText = user.address.street

// quando tento acessar uma propriedade que pode não existir, precisamos tratar esse erro
document.body.innerText = user.address ? user.address.street : 'Não informado'


// mas o exemplo acima tem um problema para o seguinte caso
const user2 = {
  name: 'Weslley',
  age: 29,
  // address: {
  //   street: 'Rua Abacate',
  //   numer: 174,
  //   zip: {
  //     code: '78945000',
  //     code: 'Abacate City',
  //   }
  // },
};

// fazer o tratamento vai ser complicado, devido o aninhamento
document.body.innerText = user2.address
 ? user2.address.zip 
  ? user2.address.zip.code
  : 'Não informado'
: 'Não informado'
