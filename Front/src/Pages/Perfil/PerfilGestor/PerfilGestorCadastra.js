import Vlibras from '@djpfs/react-vlibras-typescript';
import '../../../Assets/css/candidato.css';

import fundinho from '../../../Assets/img/Footer.png'
import brand from '../../../Assets/img/Logo.png'
import mundinho from '../../../Assets/img/imagem12.png'
import logout from '../../../Assets/img/logout.png'
import { Component } from "react/cjs/react.production.min";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

class PerfilGestorCadastra extends Component{
    constructor(props){
        super(props);
        this.state = {
            titulo : '',
            cargo : '',
            descricao : ''
        }
    }

    notify = () => {
        toast.success("Cadastro Realizado com sucesso !!")
    }

    //---------------------------------------------------------------------------------------------------

    AtualizaIdCategoria= async(event) => {
        await this.setState({idCategoria : event.target.value})
    }

    //---------------------------------------------------------------------------------------------------

    AtualizaidFuncionario = async(event) => {
        await this.setState({idFuncionario : event.target.value})
    }

    //---------------------------------------------------------------------------------------------------

    AtualizaTitulo = async(event) => {
        await this.setState({titulo : event.target.value})
    }

    //---------------------------------------------------------------------------------------------------

    AtualizaCargo = async(event) => {
        await this.setState({cargo : event.target.value})
    }

    //---------------------------------------------------------------------------------------------------

    AtualizaDescricao= async(event) => {
        await this.setState({descricao : event.target.value})
    }

    cadastraVaga = (event) => {
        //IGNOROU O COMPORTAMENTO PADRÃO DO NAVEGADOR
        event.preventDefault();

        fetch('https://localhost:5001/v1/jobs', {
                
            //DEFINE O METODO DA REQUISIÇÃO COMO POST
            method : 'POST',
                
            //CONVERTE A RESPOSTA RECEBIDA EM JSON
            body : JSON.stringify ({titulo : this.state.titulo, cargo : this.state.cargo, descricao : this.state.descricao }),
            
            //DEFINE O CABEÇALHO DA REQUISIÇÃO
            headers : {
            "Content-Type" : "application/json"
            }
            
        });
        this.notify();

    }
    render(){
    return(
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
                 <li><a href="/CadastraVaga" title="Redireciona para pagina de perguntas e respostas">CADASTRAR VAGA</a></li>
                 <li><a href="/" title="Redireciona para pagina de perguntas e respostas">VAGAS E CANDIDATOS</a></li>
                 <li><a href="/ExcluirVaga" title="Redireciona para pagina de perguntas e respostas">EXCLUIR VAGAS</a></li>
                 <li><a href="/" title="Redireciona para pagina de perguntas e respostas">ATUALIZAR VAGAS</a></li>
                 <li><a href="/" title="Redireciona para pagina de perguntas e respostas">GOOGLE CALENDAR</a></li>
                 <img src={logout} className="logout" alt="imagem"/>
            </div>
            <img src={mundinho} className="mundos" alt="imagem"/>
        </div>
        <div className="Entradas">
        <form onSubmit={this.cadastraVaga}>
            <h1>Cadastrar Vaga</h1>
            <input placeholder="Digite o titulo da vaga" value = {this.state.titulo} onChange={this.AtualizaTitulo} type="text" ></input>

            <input placeholder="Digite a descrição da vaga" value = {this.state.descricao} onChange={this.AtualizaDescricao} type="text"></input>

            <input placeholder="Digite o cargo" value = {this.state.cargo} onChange={this.AtualizaCargo} type="text"></input>

            <button className="atualizador" type='submit'><p>Salvar Dados</p></button>
        </form>
        </div>
        <div className="footerCandidato">
          <img src={fundinho} alt="imagem"/>
        </div>
        </div>
    )
    }
}
export default PerfilGestorCadastra;