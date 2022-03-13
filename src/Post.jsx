import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Curtidas from "./Curtidas";
export default function Post(props) {
    return (
        <div class="post">
            <Topo img={props.imgUsuario} usuario={props.usuario}/>
            <Conteudo img={props.imgConteudo}/>
            <div class="fundo">
                <div class="acoes">
                    <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <Curtidas img={props.imgCurtidas} curtidoPor={props.curtidoPor} curtidoNum={props.curtidoNum}/>
        </div>
    );
}