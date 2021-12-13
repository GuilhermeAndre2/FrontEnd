import { Component} from 'react';
import '../../Assets/css/cadastro.css'

import cadastro from '../../../src/Assets/img/cadastro2.jpg'

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
//---------------------------------------------------------------------------------------------------
    render(){ 
        return(
            <main>
                <div className="titulo">
                <h1>Cadastrar-se</h1>
                    <p>Bem Vindo ao portal de vagas da Linx, cadastre-se e tenha acesso as melhores vagas nas melhores empresas do país</p>
                </div>
                <div className="backgroud">
                    <img src={cadastro} alt="Cadastro"/>
                </div>
                <section>
                    <form onSubmit={this.cadastranovousuario}>
                <div className="Cadastrar">
                    
                    
                    <input placeholder="TipoUsuario" value = {this.state.idTipoUsuario} onChange={this.AtualizaIdTipoUsuario} type="text" className="gui2"></input>
                                       
                    <input placeholder="Digite seu nome" value = {this.state.nome} onChange={this.AtualizaNome}type="text" className="gui2"></input>

                    
                    <input placeholder="Digite sua idade" value = {this.state.idade} onChange={this.AtualizaIdade} type="text" className='gui2'></input>

                    
                    <input placeholder="Digite seu endereço" value = {this.state.endereco} onChange={this.AtualizaEndereco} type="text" className='gui2'></input>

                    
                    <input placeholder="Digite o seu CPF" value = {this.state.cpf} onChange={this.AtualizaCpf} type="text" className='gui2'></input>

                    <input placeholder= "Digite o seu RG" value = {this.state.rg} onChange={this.AtualizaRg} type="text" className='gui2'></input>
                    
                    <input placeholder="Digite o seu Email" value = {this.state.email} onChange={this.AtualizaEmail} type="email" className='gui2' ></input>

                    <input placeholder="Digite a sua Senha" value = {this.state.senha} onChange={this.AtualizaSenha} type="text" className='gui2'></input>
                    
                    <input placeholder="Insira sua foto" value = {this.state.foto} onChange={this.AtualizaFoto} type="text" className='gui2'></input>

                    {
                        <button type='submit'  disabled={this.state.idTipoUsuario === '', this.state.nome === '', this.state.idade === '', this.state.endereco === '', this.state.cpf === '', this.state.rg === '', this.state.email ==='', this.state.senha === '', this.state.foto === "" ? 'none' : ''} ><p>Cadastrar-se </p></button>
                    }
                        <button onClick={this.limparCampos}>
                        <p>Cancelar</p>
                        </button>
                    </div>
                    </form>

                    
                </section>
            </main>
        )}
}
export default CadastraUsuario;

