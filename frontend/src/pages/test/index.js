import React, {Component} from 'react';
import api from '../../services/api';
import './style.css';


export default class Test extends Component{
    state ={
        pergunta:[],
        respostas: [],
        id:
    };
    componentDidMount(){
        this.loadWords();
    }

    Verifica = async(id) =>{
        console.log(id)
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
                <div className="word-list">
                    {respostas.map(resposta =>(
                    <div key={resposta._id}>
                        <button onClick={this.Verifica(resposta._id)}>{resposta.wordPortuguese}</button>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}




