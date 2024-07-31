import './CampoTexto.css'

const CampoTexto = (props) => {

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto