const RenderCond = () => {

    const x = 12;
    const y = 10;

    return (
    <div>
      {x > 5 && <p>X é maior que 5</p>}
      {x > y ? <p>{x} é maior que {y}</p> : <p>{x} é não é maior que {y}</p>}
    </div>
    );
};

export default RenderCond;