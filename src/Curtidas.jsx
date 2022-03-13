export default function Fundo(props) {
    return (
        <div class="fundo">
            <div class="curtidas">
                <img src={props.img} />
                <div class="texto">
                    Curtido por <strong>{props.curtidoPor}</strong> e <strong>{props.curtidoNum}</strong>
                </div>
            </div>
        </div>
    );
}