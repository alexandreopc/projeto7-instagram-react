import Post from "./Post";
export default function Posts() {
    const objetosPost = [
        {
            imgUsuario:"assets/img/meowed.svg",
            usuario:"meowed",
            imgConteudo:"assets/img/gato-telefone.svg",
            imgCurtidas:"assets/img/respondeai.svg",
            curtidoPor:"respondeai",
            curtidoNum:"outras 101.523 pessoas"
        },
        {
            imgUsuario:"assets/img/barked.svg",
            usuario:"barked",
            imgConteudo:"assets/img/dog.svg",
            imgCurtidas:"assets/img/adorable_animals.svg",
            curtidoPor:"adorable_animals",
            curtidoNum:"outras 99.159 pessoas"
        }
    ];
    return (
        <div className="posts">
            {objetosPost.map((objeto) => <Post key={Math.random().toString(36).substr(2, 9)} imgUsuario={objeto.imgUsuario} usuario={objeto.usuario} imgConteudo={objeto.imgConteudo} imgCurtidas={objeto.imgCurtidas} curtidoPor={objeto.curtidoPor} curtidoNum={objeto.curtidoNum}/>)}
        </div>
    );
}