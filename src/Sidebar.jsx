import Sugestao from "./Sugestao";
import Usuario from "./Usuario";
export default function Sidebar() {
    const objetosSidebar = [
        {
            img:"assets/img/bad.vibes.memes.svg",
            nome:"bad.vibes.memes",
            razao:"Segue você"
        },
        {
            img:"assets/img/chibirdart.svg",
            nome:"chibirdart",
            razao:"Segue você"
        },
        {
            img:"assets/img/razoesparaacreditar.svg",
            nome:"razoesparaacreditar",
            razao:"Novo no Instagram"
        },
        {
            img:"assets/img/adorable_animals.svg",
            nome:"adorable_animals",
            razao:"Segue você"
        },
        {
            img:"assets/img/smallcutecats.svg",
            nome:"smallcutecats",
            razao:"Segue você"
        }
    ]
    return (
        <div className="sidebar">
            <Usuario img="assets/img/catanacomics.svg" apelido="catanacomics" nome="Catana"/>
            
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {objetosSidebar.map((objeto) => <Sugestao key={Math.random().toString(36).substr(2, 9)} img={objeto.img} nome={objeto.nome} razao={objeto.razao}/>)}
            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}