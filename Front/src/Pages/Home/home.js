import '../../Assets/css/home.css';
import Vlibras from '@djpfs/react-vlibras-typescript'
import Chatbot from '../chatbot';

import {Component} from 'react';
import fundo from '../../Assets/img/Fundo_Roxo.png'
import logo from '../../Assets/img/Logo.png'
import apple from '../../Assets/img/Apple.png'
import Windows from '../../Assets/img/Windows.png'
import Android from '../../Assets/img/Android.png'
import Iphone from '../../Assets/img/Iphone.png'
import Mobile from '../../Assets/img/Mobile.jpg'
import monitor from '../../Assets/img/monitor.png'
import footer from '../../Assets/img/Footer.png'
import linkedin from '../../Assets/img/linkedin 1.png'
import facebook from '../../Assets/img/instagram 1.png'
import instagram from '../../Assets/img/facebook 1.png'
import youtube from '../../Assets/img/youtube 1.png'

class Home  extends Component{
  constructor(props){
      super(props);
      this.state = {
          
      }
  }

  logout = () => {
    localStorage.removeItem('softX.webApi')
}

  render(){ 
    return(
      <div>
      <Vlibras/>
      <Chatbot/>
      <div className="parte1">
        <div className="Fundo">
          <img src={fundo} alt="imagem"/>
        </div>
        <div className="logo">
        <img src={logo} alt="imagem"/>
        <div className="links">
          <li><a href="/home" title="voltar para a página inicial">Quem Somos ?</a></li>
          <li><a href="/vagas" title="Vai para pagina de vagas">Vagas</a></li>
          <li><a href="/dicas.html" title="Redireciona para pagina de dicas">Dicas</a></li>
          <li><a href="/faq" title="Redireciona para pagina de perguntas e respostas">FAQ</a></li>
          <li><a href="/" title="Redireciona para pagina de perfil">Login</a></li>
          </div>
        </div>
        <div className="text1">
            <h2>Dê agora o próximo passo em seu futuro profissional.</h2>
            <p>Encontre suas vagas de empregos na Soft X, são milhares de empregos nas maiores empresas do país. Ofertas de emprego exclusivas nas melhores agencia de .</p>
            <div className="logos">
              <img src={apple} alt='logo apple'/>
              <img src={Android} alt='logo Android' />
              <img src={Windows} alt='logo Windows' />
            </div>
            <div className="iphone">
              <img src={Iphone} alt="imagem"/>
            </div>
            <div className="preenchimento">
              <img src={Mobile} alt="imagem"/>
            </div>
        </div>
      </div>
          <section class="parte2">
            <h2><b>Quem Somos ?</b></h2>
            <p>Lorem ipsum dolor sit amet. Vel repellat totam et rerum voluptates ad nihil voluptatem nam reiciendis corporis et quam voluptas eum corporis asperiores ab porro sint. Eum facere reprehenderit eos mollitia architecto non sint praesentium sed temporibus unde eum quae soluta. In nisi fuga ut nemo provident non natus nesciunt! It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>
        <section class="parte3">
        <h2><b>Nossos Serviços</b></h2>
        <p>Lorem ipsum dolor sit amet. Vel repellat totam et rerum voluptates ad nihil voluptatem nam reiciendis corporis et quam voluptas eum corporis asperiores ab porro sint. Eum facere reprehenderit eos mollitia architecto non sint praesentium sed temporibus unde eum quae soluta.</p>
        <div class="quadrados">
            <div class="q1">
                <h1>FAQ</h1>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div class="q1">
                <h1>FeedBack</h1>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div class="q1">
                <h1>Acessibilidade</h1>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
        </div>
        <div class="imagem">
            <img src={monitor} alt='icone monitor'/>
        </div>
        <div class="quadrados2">
            <div class="q2">
                <h1>ChatBot</h1>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div class="q2">
                <h1>Jukebox</h1>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                
            </div>
            <div class="q2">
                <h1>Video-Entrevista</h1>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
        </div>
    </section>
    <div class="footer">
      <img src={footer} alt="imagem"/>
        <div class="logo1">
          <img src={logo} alt="imagem"/>
        </div>
        <div class="redes">
            <img src={linkedin} alt="imagem"/>
            <img src={instagram} alt="imagem"/>
            <img src={facebook} alt="imagem"/>
            <img src={youtube} alt="imagem"/>
        </div>
    </div>
    
    </div>
      
    )}
}

export default Home;