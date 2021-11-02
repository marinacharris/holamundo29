function ListaResultados(props){
    return(
        <div>
            <ul>
                {props.resultados.map((elemento) =>
                    <li>La suma de {elemento.valor1} y {elemento.valor2} es {elemento.resultado} </li>

                )}

            </ul>

        </div>
    );
}

export default ListaResultados;