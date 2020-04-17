import React, {Component} from 'react';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';


export default class Test extends Component{
    state ={
        pergunta:[],
        respostas: [],
        cont:(''),
    };
    componentDidMount(){
        this.loadWords(0);
    }

    Verifica = async(id) =>{
        if(id === this.state.pergunta._id){
            alert("Certa Resposta!");
            var aux = Math.floor(Math.random() * 10);
            while (aux >= (this.state.cont)){
                aux = Math.floor(Math.random() * 10);
            }
            console.log(aux)
            this.loadWords(aux)

        }else{
            alert("Errado!")
        }
    }

    loadWords = async(id_inicial)=>{
        const response = await api.get("/test");
        const response2 = await api.get(`/words/${response.data[id_inicial]._id}`);
        this.setState({pergunta:response2.data});
        this.setState({respostas:response.data});
        this.setState({cont: response.data.length})
     };

    
    render(){
        const {respostas} =this.state;
        
        return(
            <div className="tudo">    
                <div className="pergunta">
                    <h1>{this.state.pergunta.wordEnglish}</h1>
                </div>
                <div className="aswer">
                    {respostas.map(resposta =>(
                    <div key={resposta._id}>
                        <button onClick = {() => this.Verifica(resposta._id)} type="button">
                        {resposta.wordPortuguese}
                        </button> 
                    </div>
                    ))}
                </div>
                <div className="voltar">
                    <Link className="back-link" to={'/lista'}>Voltar</Link>
                </div>
                
            </div>
        )
    }
}




