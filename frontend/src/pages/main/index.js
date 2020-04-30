import React, {Fragment, Component} from 'react';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';
import {FiTrash2, FiPlusCircle, FiBookOpen, FiCheckCircle} from "react-icons/fi";


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
            <Fragment>
                <div className="header">
                    <h2>Project English</h2>
                    <Link className = "btn-header" to = "/cadastro"><FiPlusCircle size={25} color = "#0073FB"/></Link>
                    <Link className = "btn-header" to = "/test"><FiCheckCircle size={25} color = "#0073FB"/></Link>
                    <Link className = "btn-header" to = "/grupo"><FiBookOpen size={25} color = "#0073FB"/></Link>    
                </div>
                <div className="word-list-main">
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
                        <Link className="btn" to={`/detalhes/${word._id}`} >Saiba mais</Link>
                    </article> 
                    ))}
                </div>
            </Fragment>
        )
    }
}




