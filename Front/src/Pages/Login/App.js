import React, {Component} from 'react';
import axios from 'axios';
import {parseJwt, usuarioAutenticado} from '../../Services/auth';
import '../../Assets/css/login.css';

import Fundo from '../../Assets/img/fundo.jpg'
import logo from '../../Assets/img/Logo1.png'

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
class Login extends Component {
  constructor(props){
      super(props);
      this.state = {
          email : '',
          senha : '',
          errorMessage : '',
          isLoading : false
      }
  };

  notify = () => {
      toast.error("Email ou Senha invalidos !!")
  }
   Sucess = () => {
       toast.success("Login feito com sucesso !!")
   }
  
//------------------------------------------------------------------------------------------------------
//CHAMA A API PARA REALIZAR O LOGIN
efetuaLogin = (event) => {
//IGNORA O COMPORTAMENTO PADRÃO
event.preventDefault();

//TIRA A FRASE DE ERRO E DEFINE QUE A REQUISIÇÃO ESTA EM ANDAMENTO
this.setState({errorMessage : '', isLoading : true})

//DEFINE A URL E O CORPO DA REQUISIÇÃO
axios.post('https://localhost:5001/v1/login', {
    email : this.state.email,
    senha : this.state.senha,
})

.then(resposta => {
    if(resposta.status === 200){
        //ARMAZENA NO LOCALSTORAGE O TOKEN
        localStorage.setItem('softX.webApi', resposta.data.token)

        //EXIBE NO CONSOLE O NOSSO TOKEN 
        //SE CLICAR EM CIMA ELE MOSTRA A DIVISÃO DO TOKEN TAMBEM
        //DA PRA "VALIDAR" ELE NO JWT.IO
        console.log('Meu Token é :' + resposta.data.token)

        //DEFINE QUE A REQUISIÇÃO TERMINOU
        this.setState({isLoading : false})

        console.log(parseJwt());

        //EXIBE NO CONSOLE APENAS O TIPO DE USUARIO
        console.log(parseJwt().role);

        if(parseJwt().Tipo === '30e65b2d-f080-4bd0-92a0-6f99a67bd0f8'){
            console.log(this.props);
            console.log(usuarioAutenticado());
            this.props.history.push('/home')

            this.Sucess();
        }
        else if(parseJwt().Tipo === '30e65b2d-f080-4bd0-92a0-6f99a67bd0f8'){
            console.log(this.props);
            console.log(usuarioAutenticado());
            this.props.history.push('/home')
            this.Sucess();
        }
        else{
            this.props.history.push('/')
        }

    }
})
//CASO O USUARIO DIGITE O EMAIL OU SENHA ERRADOS, NÓS PERSONALIZAMOS UMA MENSAGEM
.catch(() => {
    //MENSAGEM PERSONALIZADA QUE CRIAMOS:
    this.setState({errorMessage : '', isLoading : false }, this.notify)
})
}

atualizaStateCampo = (campo) => {
  this.setState({ [campo.target.name] : campo.target.value})
}
render(){
  return(
      <div>
  <main>
      <section className="entrar">
          <div className="fundo" >
              <img src={Fundo} alt="logo do instagra"/>
          </div>
          <form onSubmit={this.efetuaLogin} className="Geral">
              <section className="Geral">
                  <div>
                    <img src={logo} alt="logo do instagra"/>
                  </div>
                  <input type="text" name="email" value={this.state.email} onChange={this.atualizaStateCampo}  placeholder="Digite seu email"/>
                  <input type="text" name="senha" placeholder="Digite sua senha" value={this.state.senha} onChange={this.atualizaStateCampo}/>
                  <p style={{color : 'red'}}>{this.state.errorMessage}</p>
                  {
                      this.state.isLoading === true &&
                      <button type="submit" className='gui2' disabled>Loading...</button>
                  }
                  {
                      this.state.isLoading === false &&
                      <button type="submit" className='Btn1' disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''}> <p>Entrar</p> </button>
                  }
                  <button class="Btn2"><a href="/cadastro">Cadastrar-se</a></button>
              </section>
          </form>
      </section>
  </main>        
      </div>
  )
}
}
export default Login;