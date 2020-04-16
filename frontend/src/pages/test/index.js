import React, {Component} from 'react';
import api from '../../services/api';
import './style.css';


export default class Test extends Component{
    state ={
        pergunta:[],
        respostas: [],
    };
    componentDidMount(){
        this.loadWords();
    }

    Verifica = async(id) =>{
        if(id === this.state.pergunta._id){
            alert("Certa Resposta!");
        }else{
            alert("Errado!")
        }
    }

    loadWords = async()=>{
        const response = await api.get("/test");
        const response2 = await api.get("/wordss");
        this.setState({pergunta:response2.data});
        this.setState({respostas:response.data});
        
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
            </div>
        )
    }
}




