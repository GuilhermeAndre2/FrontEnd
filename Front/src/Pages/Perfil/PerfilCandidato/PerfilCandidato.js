import Vlibras from '@djpfs/react-vlibras-typescript';
import '../../../Assets/css/candidato.css'

import fundinho from '../../../Assets/img/Footer.png'
import brand from '../../../Assets/img/Logo.png'
import mundinho from '../../../Assets/img/imagem12.png'
import logout from '../../../Assets/img/logout.png'

function PerfilCandidato() {
  
  return (
    <div>
      <Vlibras/>
        <div>
        <div className="topo1">
                <img src={fundinho} alt="imagem"/>
            </div>
            <div className="brand1">
                <img src={brand} alt="imagem"/>
                <div className="direcionamentos1">
                    <li><a href="/home" title="voltar para a página inicial">Quem Somos ?</a></li>
                    <li><a href="/vagas" title="Vai para pagina de vagas">Vagas</a></li>
                    <li><a href="/home" title="Redireciona para pagina de dicas">Dicas</a></li>
                    <li><a href="/faq" title="Redireciona para pagina de perguntas e respostas">FAQ</a></li>
                    <li><a href="/perfil" title="Redireciona para pagina de perfil">Perfil</a></li>
                    <li><a href="/" title="Sair da pagina e retorna a pagina de login">Sair</a></li>
                </div>
            </div>
        </div>
        <div className="Lateral">
            <div className="botaoUser">
                 <li><a href="/VagasDisponiveis2" title="Redireciona para pagina de perguntas e respostas">VAGAS</a></li>
                 <li><a href="/" title="Redireciona para pagina de perguntas e respostas">CANDIDATURAS</a></li>
                 <li><a href="/minhas" title="Redireciona para pagina de perguntas e respostas">MEUS TESTES</a></li>
                 <li><a href="/comparador2" title="Redireciona para pagina de perguntas e respostas">COMPARADOR</a></li>
                 <li><a href="/" title="Redireciona para pagina de perguntas e respostas">MENSAGENS</a></li>
            </div>
            <img src={mundinho} className="mundos" alt="imagem"/>
        </div>
        <div className="Entradas">
            <h1>Editar Perfil</h1>
            <input placeholder="Digite seu novo Email"></input>
            <input placeholder="Telefone" type="tel"></input>
            <input placeholder="Nome"></input>
            <input placeholder="Foto" type="file"></input>
            <input placeholder="Video" type="file"></input>
            <button className="atualizador"><p>Salvar Dados</p></button>
        </div>
        <div className="footerCandidato">
          <img src={fundinho} alt="imagem"/>
        </div>
    </div>
  )
}

export default PerfilCandidato;