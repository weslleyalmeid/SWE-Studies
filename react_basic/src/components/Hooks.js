import { useState, useEffect } from "react";

const Hooks = () => {

    let idade = 30;

    // consultar, alterar, sempre utilizar dessa forma
    const [novaIdade, setNovaIdade] = useState(40);
    
    const changeAge = () => {
        idade = 31;
        console.log(idade);
    };

    const changeNewAge = () => {
        setNovaIdade(45);
    };

    useEffect(() => {
        console.log('Testando');
    });

    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>
            
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar idade</button>
        </div>
    )
}


export default Hooks