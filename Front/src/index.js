import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

//------------------------------------------------------------------
// PÁGINAS DE ENTRADA
import app from '../src/Pages/Login/App'
import cadastro from './Pages/Cadastro/cadastro';

//------------------------------------------------------------------
// PÁGINAS HOME
import Home from './Pages/Home/home';
import faq from './Pages/FAQ/faq';
import Vagas from './Pages/Vagas/vagas';


//------------------------------------------------------------------
// PÁGINAS DO PERFIL DO CANDIDATO
import PerfilCandidato from './Pages/Perfil/PerfilCandidato/PerfilCandidato';
import Minhas from './Pages/Perfil/PerfilCandidato/PerfilCandidatoTestes'
import Comparador2 from './Pages/Perfil/PerfilCandidato/Comparador2';
import Comparador from './Pages/comparador';
import VagasDisponiveis2 from './Pages/Perfil/PerfilCandidato/VagasDisponiveis'

//------------------------------------------------------------------
// PÁGINAS DO PERFIL DO GESTOR
import PerfilGestor from './Pages/Perfil/PerfilGestor/PerfilGestor';
import PerfilGestorCadastra from './Pages/Perfil/PerfilGestor/PerfilGestorCadastra';
import PerfilGestorExclui from './Pages/Perfil/PerfilGestor/PerfilGestorExclui';


const routing = (
  <Router>
    <div>
        <Switch>
        
          <Route exact path="/" component={app}/> 
          <Route exact path="/cadastro" component={cadastro}/> 

          <Route path="/home" component={Home}/>
          <Route path="/faq" component={faq}/>
          <Route path="/vagas" component={Vagas}/>

          <Route path="/perfilcandidato" component={PerfilCandidato}/>
          <Route path="/minhas" component={Minhas}/>
          <Route path="/comparador" component={Comparador}/>
          <Route exact path="/VagasDisponiveis2" component={VagasDisponiveis2}/> 
          <Route path="/comparador2" component={Comparador2}/>

          <Route path="/perfilGestor" component={PerfilGestor}/>
          <Route exact path="/CadastraVaga" component={PerfilGestorCadastra}/> 
          <Route path="/ExcluirVaga" component={PerfilGestorExclui}/>
          
        </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root')
);
