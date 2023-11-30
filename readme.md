## FastAPI with React

Start FastAPI app
```
uvicorn main:app --reload
```

Create new project app in React
```
npx create-react-app finance-app
```

Start app
```
cd finance-app
npm start
```

Install dependence and libs
```
npm install axios
```


## JS Essential


start project
```sh
# set name and select type
npm create vite@latest
```

Clean project
```sh
# delete all content in main.js
rm style.css javascript.svg counter.js
```

Execute how dev
```
npm run dev
```


### Nullish Coalescing Operator ??
Operador para lidar com valors nulos

```js

const idade = 0;

// operador OR ||, temos um problema, 0, '', [], false, undefined, null  => false, valores nao validos
// assim utilizamos ?? no lugar do || para uma operacao valida
document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado');

```


### Objetos


```js
// Objetos

const user = {
  name: 'Weslley',
  idade: 29,
  address: {
    street: 'Rua Abacate',
    numer: 174
  },
};


// elemento existe no objeto
document.body.innerText = ('name' in user)

// mostrar chaves e valores
document.body.innerText = Object.keys(user)
document.body.innerText = Object.values(user)
document.body.innerText = JSON.stringify(Object.values(user))

// vetor com vetores dentro, [[chave, valor]]
document.body.innerText = JSON.stringify(Object.entries(user))
```

### Desestruturação


```js
// Desestruturação

const user = {
  name: 'Weslley',
  idade: 29,
  address: {
    street: 'Rua Abacate',
    numer: 174
  },
};


const address = user.address
// forma similar a superior utilizando desestruturação
const { address } = user
document.body.innerText = JSON.stringify({address})


// desestruturacao permite acessar mais elementos do objeto
const { address, idade } = user
document.body.innerText = JSON.stringify({address, idade})


// renomendo nome da variavel idade para age
const { address, idade: age } = user
document.body.innerText = JSON.stringify({address, age})


// setando valor default caso variavel não exista no objeto
const { address, idade: age, nickname = 'Almeida' } = user
document.body.innerText = JSON.stringify({ address, age, nickname })


// a destruturação pode ser utilizado em qualquer lugar onde tem referência para um objeto

function mostraIdade(user) {
  return user.idade;
}
document.body.innerText = mostraIdade(user)


//capturamos apenas a chave idade do objeto user
function mostraIdade({ idade }) {
  return idade;
}
document.body.innerText = mostraIdade(user)
```


### Rest operator


```js

// utilizado para acessar o resto das informacoes que sobram da desestruturação
const user = {
  name: 'Weslley',
  idade: 29,
  address: {
    street: 'Rua Abacate',
    numer: 174
  },
};

const { name, idade,  ...rest } = user;
document.body.innerText = JSON.stringify(rest)


// podemos utilizar o rast em arrays
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// destruturacao sao similares
// const first = array[0];
// const second = array[1];
const [first, second] = array;


// destruturacao com rest operator
const [first, second, ...restante] = array;
document.body.innerText = JSON.stringify(restante)

// quero capturar o primeiro e o terceiro
const [first, ,third, ...restante] = array;
document.body.innerText = JSON.stringify({first, third, restante})
```

### Short Syntax


```js
// Short Syntax
// utiliza o nome da variavel como chave para o objeto
const name = 'Weslley';
const age = 27;

// const user = {
//   name: name,
//   age: idade,
// };
// short syntax transform modo acima igual ao debaixo
const user = {
    name,
    age,
  };

document.body.innerText = JSON.stringify(user)
```

### Optional Chaining


```js


```