import Post from "./Post";
export default function Posts() {
    return (
        <div class="posts">
            <Post imgUsuario="assets/img/meowed.svg" usuario="meowed" imgConteudo="assets/img/gato-telefone.svg" imgCurtidas="assets/img/respondeai.svg" curtidoPor="respondeai" curtidoNum="outras 101.523 pessoas"/>
            <Post imgUsuario="assets/img/barked.svg" usuario="barked" imgConteudo="assets/img/dog.svg" imgCurtidas="assets/img/adorable_animals.svg" curtidoPor="adorable_animals" curtidoNum="outras 99.159 pessoas"/>
        </div>
    );
}