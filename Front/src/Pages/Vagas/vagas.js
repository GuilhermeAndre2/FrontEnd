import '../../Assets/css/vagas.css';
import Vlibras from '@djpfs/react-vlibras-typescript'


import fundinho from '../../Assets/img/fundo2.png'
import brand from '../../Assets/img/Logo.png'

function Vagas() {
    return (
        <div>
            <Vlibras/>
            
            <div className="topo">
                <img src={fundinho} alt="imagem"/>
            </div>
            <div className="brand">
                <img src={brand} alt="imagem"/>
                <div className="direcionamentos">
                    <li><a href="/home" title="voltar para a página inicial">Quem Somos ?</a></li>
                    <li><a href="/vagas" title="Vai para pagina de vagas">Vagas</a></li>
                    <li><a href="/home" title="Redireciona para pagina de dicas">Dicas</a></li>
                    <li><a href="/faq" title="Redireciona para pagina de perguntas e respostas">FAQ</a></li>
                    <li><a href="/perfil" title="Redireciona para pagina de perfil">Perfil</a></li>
                    <li><a href="/" title="Sair da pagina e retorna a pagina de login">Sair</a></li>
                </div>
            </div>
            <div className="tabelas">
            <div className="Table">
                <h2>Estágio desenvolvedor back-end</h2>
                <p>Pretensão salarial: R$ 1500</p>
                <p>São Paulo, Brasil</p>
                <p className="desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <div className="btn">
                    <button>Detalhes</button>
                    <button>Participar</button>
                </div>
            </div>
            <div className="Table">
                <h2>Estágio desenvolvedor back-end</h2>
                <p>Pretensão salarial: R$ 1500</p>
                <p>São Paulo, Brasil</p>
                <p className="desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <div className="btn">
                    <button>Detalhes</button>
                    <button>Participar</button>
                </div>
            </div>
            <div className="Table">
                <h2>Estágio desenvolvedor back-end</h2>
                <p>Pretensão salarial: R$ 1500</p>
                <p>São Paulo, Brasil</p>
                <p className="desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <div className="btn">
                    <button>Detalhes</button>
                    <button>Participar</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Vagas