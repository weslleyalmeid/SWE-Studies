import AnotherComponent from './AnotherComponent';

// () para retornar como objeto
function FirstComponent(){
    return (
        // não pode ter dois elementos pais
        <div className="fistcompoenent">
            <p>Primeiro Component</p>
            <AnotherComponent />
        </div>
    );
};

export default FirstComponent