import React, {Component} from 'react';
import axios from 'axios';
import {parseJwt, usuarioAutenticado} from '../../Services/auth';
import '../../Assets/css/login.css';

import logo from '../../Assets/img/Logo.png'

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

exibeSenha()
{
    var x = document.getElementById("myInput");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if(x.type === 'password'){
        x.type = "text";
        y.style.display = 'block';
        z.style.display = 'none';
    }
    else{
        x.type = "password";
        y.style.display = 'none';
        z.style.display = 'block';
    }
}

render(){
  return(
    <div>
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </head>
        <main>
            <section className="bg-roxo">
            </section>
            <section className="login">
                <img src={logo} alt="logo" className='logo'/>
                <div className='input-box'>
                    <i class="fas fa-envelope"></i>
                    <input type="email" name="email" value={this.state.email} onChange={this.atualizaStateCampo}  placeholder="Digite seu email"/>
                </div>
                <div className='input-box'>
                    <i class="fas fa-lock"></i>
                    <input type="password" name="senha" placeholder="Digite sua senha" value={this.state.senha} onChange={this.atualizaStateCampo} id='myInput'/>
                    <span className="eye" onClick={this.exibeSenha}>
                        <i id='hide1' class="fas fa-eye"></i>
                        <i id='hide2' class="fas fa-eye-slash"></i>
                    </span>
                </div>
                    <div className="btn-login">
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
                    </div>
            </section>  
        </main>        
    </div>
  )
}
}
export default Login;