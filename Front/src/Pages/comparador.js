import React from "react";
import { Component } from "react/cjs/react.production.min";
import axios from "axios";
class Comparador extends Component {
    constructor(props){
      super(props);
      this.state = {
          pontuacao : [],
          string1: "Facebook",
          string2: "Facebook"
      }
  }
  
  buscaResultado = () => {
    fetch("https://string-similarity-comparison.p.rapidapi.com/comparison", {
	  method: "POST",
	  headers: {
		"content-type": "application/json",
		"x-rapidapi-host": "string-similarity-comparison.p.rapidapi.com",
		"x-rapidapi-key": "e60ef5661amsh2661ba4df9ea117p14d9dbjsn2ca0dd085967"
	},
	"body": {
		"string1": "facebook",
		"string2": "facebok"
	}
})
  .then(resposta => resposta.json())
  .then(dados => this.setState({ listaConsulta : dados }))
  .catch(err => {
    console.error(err);
  });
}
  componentDidMount(){
    this.buscaResultado();
  }
  
  render(){ 
      return(
              <div>
          
          </div>
    )
  }
}
export default Comparador;