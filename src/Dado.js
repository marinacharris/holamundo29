import './Dado.css';
function Dado(props){
    return(
        <div className='dado-estilo'>
            {props.valor}
        </div>
    )
}
export default Dado;