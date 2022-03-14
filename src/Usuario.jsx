export default function Usuario(props) {
    return(
        <div className="usuario">
                <img src={props.img}/>
                <div className="texto">
                    <strong>{props.apelido}</strong>
                    {props.nome}
                </div>
        </div>
    );
}