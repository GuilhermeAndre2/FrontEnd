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
render(){
        return(
            <div>
            </div>
        )
    }
}
