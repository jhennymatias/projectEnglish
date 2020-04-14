import React, {Component} from 'react';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';
import {FiTrash2} from "react-icons/fi";


export default class Main extends Component{
    state ={
        words: [],
    };
    componentDidMount(){
        this.loadWords();
    }

    deleteWord = async(id) => {
        try{
            await api.delete(`words/${id}`); 
            alert("Apagado com sucesso!");        
        }catch(err){
            alert("Erro ao deletar caso!")
        }
        this.loadWords();
    }

    loadWords = async()=>{
        const response = await api.get("/words");
        this.setState({words:response.data})
    };

    
    
    render(){
        const {words} =this.state;
        return(
            <div className= "tudo">
                <div className="novobtn">
                    <Link className = "btn" to = "/cadastro"> Cadastrar nova palavra</Link>
                </div>
                <div className="word-list">
                
                    {this.state.wordEnglish}
                    {words.map(word =>(
                    <article key={word._id}>
                        <strong>{word.wordEnglish}</strong> 
                        <div className= "trash">
                            <button onClick = {() => this.deleteWord(word._id)} 
                            type="button"> 
                            <FiTrash2 size={20} color = "#a8a8b3"/>
                            </button>    
                        </div>
                        <Link to={`/detalhes/${word._id}`} >Saiba mais</Link>
                    </article> 
                    ))}
                </div>
            </div>
        )
    }
}




