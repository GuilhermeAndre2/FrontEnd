import '../../Assets/css/faq.css';
import Vlibras from '@djpfs/react-vlibras-typescript'

import BackGround from '../../Assets/img/fundo2.png'
import Simbolo from '../../Assets/img/Logo.png'
import mais from '../../Assets/img/mais.png'
import retangulo from '../../Assets/img/retangulo.png'
import animacao from '../../Assets/img/trb.png'
import footer from '../../Assets/img/Footer.png'
import linkedin from '../../Assets/img/linkedin 1.png'
import facebook from '../../Assets/img/instagram 1.png'
import instagram from '../../Assets/img/facebook 1.png'
import youtube from '../../Assets/img/youtube 1.png'

function faq() {
    return (
        <div>
            <Vlibras/>
            <div className="menu">
                <img src={BackGround} alt="imagem"/>
            </div>
            <div className="simbolo">
                <img src={Simbolo} alt="imagem"/>
            <div className="redireciona">
            <li><a href="/home" title="voltar para a página inicial">Quem Somos ?</a></li>
            <li><a href="/vagas" title="Vai para pagina de vagas">Vagas</a></li>
            <li><a href="/home" title="Redireciona para pagina de dicas">Dicas</a></li>
            <li><a href="/faq" title="Redireciona para pagina de perguntas e respostas">FAQ</a></li>
            <li><a href="/perfil" title="Redireciona para pagina de perfil">Perfil</a></li>
            <li><a href="/" title="Sair da pagina e retorna a pagina de login">Sair</a></li>
            </div>
            </div>
            <div className='textos'>
                <h2>FAQ</h2>
                <p>Possui dúvidas sobre a SoftX? Nós podemos te ajudar!</p>
                <div className="Linha"></div>
            </div>
            <div className="Faq">
            <img src={mais} alt="imagem"/>
                <details className="detalhes">
                    <summary>Quem é a Linx ?</summary>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </details>
            <img src={mais} alt="imagem"/>
                <details className="detalhes">
                    <summary>Quem é a Soft X ?</summary>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </details>
            <img src={mais} alt="imagem"/>
                <details className="detalhes">
                    <summary>Porque escolher a Soft X ?</summary>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </details>
            <img src={mais} alt="imagem"/>
                <details className="detalhes">
                    <summary>Qual é missão, visão e valores da Soft X ?</summary>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </details>
            <img src={mais} alt="imagem"/>
                <details className="detalhes">
                    <summary>A Soft X tem aplicativo ?</summary>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </details>
            <img src={mais} alt="imagem"/>
                <details className="detalhes">
                    <summary>O que a Soft X tem diferente das outras ?</summary>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </details>
            </div>
            <div className="ajuda">
                <img src={retangulo} alt="imagem" />  
            </div>
            <div className="animacao">
                <img src={animacao} alt="imagem" />
            </div>
            <div className="texto">
                <h2>Tendo dificuldade de como agir na sua entrevista?<br/>A SoftX pode te ajudar</h2>
                <button><p>Me Ajuda</p></button>
            </div>
            <div className="rodape">
                <img src={footer} alt="imagem"/>
            </div>
            <div className="imagens">
            <div className="Marca">
                <img src={Simbolo} alt="imagem"/>
            </div>
        <div className="midias">
            <img src={linkedin} alt="imagem"/>
            <img src={instagram} alt="imagem"/>
            <img src={facebook} alt="imagem"/>
            <img src={youtube} alt="imagem"/>
        </div>
            </div>
        </div>
        
        
    )
}

export default faq;