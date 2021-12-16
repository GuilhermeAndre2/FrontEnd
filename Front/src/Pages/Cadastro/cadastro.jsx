import { Component} from 'react';
import '../../Assets/css/cadastro.css'

import logo from '../../Assets/img/Logo.png'
import logo_softx from '../../Assets/img/logo_softX.gif'

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

class CadastraUsuario  extends Component{
    constructor(props){
        super(props);
        this.state = {
            idTipoUsuario : '30e65b2d-f080-4bd0-92a0-6f99a67bd0f8',
            nome : '', 
            idade : '', 
            endereco : '', 
            cpf: '', 
            rg : '',  
            email : '', 
            senha : '', 
            foto : '',
        }
    }

    notify = () => {
        toast.success("Cadastro Realizado com sucesso !!")
    }
  

    //CADASTRA UM NOVA USUARIO

    cadastranovousuario = (event) => {
        //IGNOROU O COMPORTAMENTO PADRÃO DO NAVEGADOR
        event.preventDefault();

        fetch('https://localhost:5001/v1/user', {
                
            //DEFINE O METODO DA REQUISIÇÃO COMO POST
            method : 'POST',
                
            //CONVERTE A RESPOSTA RECEBIDA EM JSON
            body : JSON.stringify ({ idTipoUsuario : this.state.idTipoUsuario, nome : this.state.nome, email : this.state.email, senha : this.state.senha, endereco : this.state.endereco, rg : this.state.rg, idade : this.state.idade, cpf : this.state.cpf, foto : this.state.foto}),
            
            //DEFINE O CABEÇALHO DA REQUISIÇÃO
            headers : {
            "Content-Type" : "application/json"
            }
            
        });
        this.notify();

    }

    //---------------------------------------------------------------------------------------------------

    AtualizaIdTipoUsuario = async(event) => {
        await this.setState({idTipoUsuario : event.target.value})
    }

    //---------------------------------------------------------------------------------------------------

    AtualizaNome = async(event) => {
        await this.setState({nome : event.target.value})
    }

    //---------------------------------------------------------------------------------------------------

    AtualizaIdade = async(event) => {
        await this.setState({idade : event.target.value})
    }
    //---------------------------------------------------------------------------------------------------
    //ATUALIZA A ENDERECO

    AtualizaEndereco = async(event) => {
        await this.setState({endereco : event.target.value})
    };

    //---------------------------------------------------------------------------------------------------
    //ATUALIZA CPF

    AtualizaCpf = async(event) => {
        await this.setState({cpf : event.target.value})
    }

    //---------------------------------------------------------------------------------------------------
    //ATUALIZA RG

    AtualizaRg = async(event) => {
        await this.setState({rg : event.target.value})
    }

    //ATUALIZA EMAIL

    AtualizaEmail = async(event) => {
        await this.setState({email : event.target.value})
    }

    //---------------------------------------------------------------------------------------------------
    //ATUALIZA SENHA

    AtualizaSenha = async(event) => {
        await this.setState({senha : event.target.value})
    }

    //---------------------------------------------------------------------------------------------------
    //ATUALIZA A DATA

    AtualizaFoto = async(event) => {
        await this.setState({foto : event.target.value})
    };


//---------------------------------------------------------------------------------------------------
    limparCampos = () => {
        this.setState({
            idTipoUsuario : '30e65b2d-f080-4bd0-92a0-6f99a67bd0f8',
            nome : '', 
            idade : '', 
            endereco : '', 
            cpf: '', 
            rg : '',  
            email : '', 
            senha : '', 
            foto : '',
        })
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


//---------------------------------------------------------------------------------------------------
    render(){ 
        return(
            <div>
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </head>
        <main>
            <section className="bg-roxo">
            <h3>Se cadastre  na mais nova <br/>solução de processos seletivos da SoftX</h3>
                <img src={logo_softx} alt="logo da softX" />
            </section>
            <section className="login">
                <img src={logo} alt="logo" className='logo'/>
                <form onSubmit={this.cadastranovousuario} className="form">

            <div className="form-step form-step-active">
                <div className='input-box'>
                    <i class="fas fa-user"></i>
                    <input placeholder="Digite seu nome" value = {this.state.nome} onChange={this.AtualizaNome}type="text" className="gui2"/>
                </div>
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
    
                <div className='input-box'>
                    <i class="fas fa-calendar-day"></i>
                    <input placeholder="Digite sua data de nascimento" value = {this.state.idade} onChange={this.AtualizaIdade} type="text" className='gui2' data-mask="00/00/0000"/>
                </div>
                <div className='input-box'>
                    <i class="fas fa-file-alt"></i>
                    <input placeholder="Digite o seu CPF" value = {this.state.cpf} onChange={this.AtualizaCpf} type="text" className='gui2'/>
                </div>
                <div className='input-box'>
                    <i class="fas fa-file-alt"></i>
                    <input placeholder= "Digite o seu RG" value = {this.state.rg} onChange={this.AtualizaRg} type="text" className='gui2'></input>
                </div>
                <div className='input-box'>
                    <i class="fas fa-camera"></i>
                    <label for="file-upload" className="custom-file-upload">
                        Escolha uma foto
                    </label>
                    <input id="file-upload" type="file"/>
                </div>
                    
                        <p style={{color : 'red'}}>{this.state.errorMessage}</p>
                        {
                            this.state.isLoading === true &&
                            <button type="submit" disabled>Loading...</button>
                        }
                        {
                            this.state.isLoading === false &&
                            <button type="submit"  disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''}> <p>Entrar</p> </button>
                        }
                         <button type='submit' className='btn-cad' disabled={this.state.idTipoUsuario === '', this.state.nome === '', this.state.idade === '', this.state.endereco === '', this.state.cpf === '', this.state.rg === '', this.state.email ==='', this.state.senha === '', this.state.foto === "" ? 'none' : ''} ><p>Cadastrar-se</p></button>
            </div>
                </form>
            </section>  
        </main>        
    </div>
                
        )}
}
export default CadastraUsuario;

