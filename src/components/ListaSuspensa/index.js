import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value="" selected disabled>Selecione um time</option>
                {props.itens.map(item => {
                    return <option required={props.obrigatorio} key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa