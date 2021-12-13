import Vlibras from '@djpfs/react-vlibras-typescript';
import '../../../Assets/css/candidato.css';

import fundinho from '../../../Assets/img/Footer.png'
import brand from '../../../Assets/img/Logo.png'
import mundinho from '../../../Assets/img/imagem12.png'
import { Component } from "react/cjs/react.production.min";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

class PerfilGestorExclui extends Component{
    constructor(props){
        super(props);
        this.state = {
            ListaVaga : [],
        }
    }

    notify = () => {
        toast.success("Cadastro Realizado com sucesso !!")
    }

    //---------------------------------------------------------------------------------------------------

    BuscaEmprego = () => {
        //METODO FEITO PARA SABER SE AO CARREGAR A PAGINA, É CARREGADA A FUNÇÃO DE BUSCAR CONSULTA
        console.log('Metodo funcionando')

        //CHAMA A API USANDO O FETCH
        fetch('https://localhost:5001/v1/jobs')
        
        //TRANSFORMA A RESPOSTA EM JSON
        //DEFINE O TIPO DE DADO DO RETORNO COMO JSON
        .then(resposta => resposta.json())

        //PEGA OS DADOS DA RESPOSTA E COLOCA DENTRO DO ARRAY
        .then(dados => this.setState({ ListaVaga : dados }))
        
        //CASO OCORRA UM ERRO, MOSTRA NO CONSOLE DO NAVEGADOR
        .catch((erro) => console.log(erro))
    }

    //---------------------------------------------------------------------------------------------------

    excluirVaga = (vaga) => {
        console.log('O tipo de evento ' + vaga.idVaga + ' foi selecionado')

        //CHAMA A API PASSANDO O ID DO EVENTO SELECIONADO NA URL
        fetch('https://localhost:5001/v1/jobs/' + vaga.idVaga, {

            //DEFINE O METODO DA REQUISIÇÃO
            method : 'DELETE'
        })

        .then(resposta => {
            if(resposta.status === 204){
                console.log('A Vaga' + vaga.idVaga + 'foi excluida')
            }
        })

        .catch(erro => console.log(erro))

        .then(this.BuscaEmprego)
    }
    componentDidMount(){
        this.BuscaEmprego();
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
            </div>
            <img src={mundinho} className="mundos" alt="imagem"/>
        </div>
        <div className="Entradas2">
        <form onSubmit={this.cadastraVaga}>
            <h1>Excluir Vaga</h1>
            <div className="VagasGerais2">
                    {
                        this.state.ListaVaga.map( (Teste) => {
                            return (
                                <div className="identificador2" key={Teste.idVaga}>
                                    <div className='bordinha'>
                                    <h2>{Teste.titulo}</h2>
                                    <p>{Teste.cargo} </p>
                                    <p>{Teste.descricao}</p>
                                    <button><p>Detalhes</p></button>
                                    <button onClick={() => this.excluirVaga(Teste)}>Excluir</button>
                                    </div>
                                </div>
                            )
                        } )
                    }
            </div>
        </form>
        </div>
        <div className="footerCandidato">
          <img src={fundinho} alt="imagem"/>
        </div>
        </div>
    )
    }
}
export default PerfilGestorExclui;