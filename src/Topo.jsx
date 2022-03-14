export default function Topo(props) {
    return (
        <div className="topo">
            <div className="usuario">
                <img src={props.img} />
                {props.usuario}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}