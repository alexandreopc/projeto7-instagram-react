export default function Fundo(props) {
    return (
        <div className="fundo">
            <div className="curtidas">
                <img src={props.img} />
                <div className="texto">
                    Curtido por <strong>{props.curtidoPor}</strong> e <strong>{props.curtidoNum}</strong>
                </div>
            </div>
        </div>
    );
}