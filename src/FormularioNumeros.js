function FormularioNumeros(props){
    return(
        <div>
            <form onSubmit = {props.onSumar}>
                <p>Ingrese número 1 <input type="text" name = "valor1"/></p>
                <p>Ingrese número 2 <input type="text" name = "valor2"/></p>
                <input type= "submit" value = "Sumar"/>

            </form>

        </div>
    )
}
 export default FormularioNumeros;