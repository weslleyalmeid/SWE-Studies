// utilizando destruturação, acessa o x diretamente
const Props = ({ x, y }) => {
  // const Props = (props) => { 

    return (
    <div>
      {/* {props.x > 5 && <p>X é maior que 5</p>}
      {props.x > y ? <p>{props.x} é maior que {y}</p> : <p>{props.x} é não é maior que {y}</p>} */}
      {x > 5 && <p>X é maior que 5</p>}
      {x > y ? <p>{x} é maior que {y}</p> : <p>{x} é não é maior que {y}</p>}

    </div>
    );
};

export default Props;