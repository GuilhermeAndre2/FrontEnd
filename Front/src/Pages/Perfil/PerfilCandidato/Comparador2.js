import Vlibras from '@djpfs/react-vlibras-typescript';
import '../../../Assets/css/candidato.css';
import axios from 'axios';

import fundinho from '../../../Assets/img/Footer.png'
import brand from '../../../Assets/img/Logo.png'
import mundinho from '../../../Assets/img/imagem12.png'
import logout from '../../../Assets/img/logout.png'
import { Component } from 'react';

class Comparador2 extends Component {
  constructor(props){
    super(props);
    this.state = {
        pontuacao : [],
    }
}

buscaResultado = () => {
  const options = {
    method: 'POST',
    url: 'https://job-and-resume-matching-for-hr-management-systems.p.rapidapi.com/api/v1.0/tools/resume-jobs-matcher',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'job-and-resume-matching-for-hr-management-systems.p.rapidapi.com',
      'x-rapidapi-key': 'e60ef5661amsh2661ba4df9ea117p14d9dbjsn2ca0dd085967'
    },
    data: {
      jobs: [
        'Accounting Specialist Accounting Specialist General business industry knowledge planning Bachelor\'s degree Finance Shared Services group Global activity involving Accounts Payable Payroll Corporate Credit Card Expense Reporting Travel Compliance key Business Partner company supporting payment functions key point acquisition-related activities Accounts Payable KPI\'s metrics Corporate Accounting Finance teams monthly informative account analysis reconciliations corrective actions schedule improvement implementation procure pay function employee expense reimbursement process escalations team voice mails SLA\'s requirements timely accurate compilation analysis reporting of accounting data external consultants auditors required information proper record keeping historical purposes systems procedures policies audit standards areas of potential improvement enhance efficiency weekly ACH EFT check payments bank returned payments open bank item questions ',
        'NLP researcher NLP researcher influence key value proposition of the product gather and leverage proprietary datasets NLP notably design development of multilingual scalable NLP models high-load production environments designing NLP frameworks methodologies for extensive evaluation of developed solutions from different perspectives metrics robustness sensitivity customer satisfaction awareness about recent updates NLP state-of-the-art NLP techniques tools transfer learning pre-trained language models document similarity relevance search applied language modeling conditional text generation Python modern machine learning framework Tensorflow PyTorch Keras enterprise risk compliance revenue value data operating platform presents widespread opportunity multilingual AI / ML-based solutions data every function global enterprise team machine learning systems text classification entity recognition similarity search quality relevance of insights clients adoption of these models brings significant improvements ways data structure text processing pipelines area of responsibility research development application of these models methods new innovative approaches vast amounts of client\'s communications data product management technology teams requests extensive research analysis support technology side NLP / ML conferences relevant topics similarity relevance search information retrieval applied language modeling text generation data augmentation machine learning feedback loops data privacy data anonymization techniques machine learning systems evaluation methodologies process core factors salary location core experience skills values alignment'
      ],
      resume: 'NLP Specialist Data Scientist DATA SCIENTIST analysis design development of new features sentiment analysis topic modeling named entity extraction modules implementation machine learning pipelines technological choices evolution of architecture bottlenecks algorithms workflows NLP solutions field of human resources new NLP solutions analytical models broad range of data driven solutions variety of techniques out complex models NLP algorithms sentiment analysis code Non-functional business reUuirements analysis results machine learning algorithms computer science NLP Natural Language Processing NLP Topic Modeling Deep learning Neural networks RNN CNN LSTM Word embedding models Machine learning Predictive Analytics Data Visualization Regression Clustering Data mining Artificial intelligence AI Text classification Text transcription Machine learning libraries Pytorch SQL Data preparation prototype ideas Strategic mindset PhD Master 2 nlp data'
    }
  };
  
  axios.request(options)
  .then(response => this.state.pontuacao = response)
  .then(function (response) {console.log(response.data);})
  .then(console.log(this.state.pontuacao))
  .catch(function (error) {console.error(error);});

}

componentDidMount(){
  this.buscaResultado();
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
              <li><a href="/VagasDisponiveis2" title="Redireciona para pagina de perguntas e respostas">VAGAS</a></li>
                 <li><a href="/" title="Redireciona para pagina de perguntas e respostas">CANDIDATURAS</a></li>
                 <li><a href="/minhas" title="Redireciona para pagina de perguntas e respostas">MEUS TESTES</a></li>
                 <li><a href="/comparador2" title="Redireciona para pagina de perguntas e respostas">COMPARADOR</a></li>
                 <li><a href="/" title="Redireciona para pagina de perguntas e respostas">MENSAGENS</a></li>
                  <img src={logout} className="logout" alt="imagem"/>
              </div>
              <img src={mundinho} className="mundos" alt="imagem"/>
          </div>
          <div className="Entradas">
              <h1>Comparador</h1>
              <h3>Insira a descrição da vaga pretendida e o seu curriculo e veja a suas chances de ser contratado</h3>
                 {
                   this.state.pontuacao.map( (pontos) => {
                     <p key="id">{pontos.score}</p>
                   })
                 }
          </div>
          <div className="footerCandidato">
            <img src={fundinho} alt="imagem"/>
          </div>
        </div>
  )
}
}
  
  export default Comparador2;