import React, {Component} from 'react';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';


export default class Main extends Component{
    state ={
        words: [],
    };
    componentDidMount(){
        this.loadWords();
    }


    loadWords = async()=>{
        const response = await api.get("/tag");
        this.setState({words:response.data})
        console.log(this.state.words)
    };

    
    
    render(){
        const {words} =this.state;
        return(
            <div className= "tudo">
                <div className="word-list">
                {words.map(function(word, i){
                    return( <article key={i}>
                        <strong>{word}</strong> 
                        <Link to={`/itemgrupo/${word}`} >Veja as palavras</Link>
                    </article>) 
                    })}
                </div>
                <div className="novobtn">
                    <Link className = "btn" to = "/lista">Voltar</Link>
                </div>
            </div>
        )
    }
}




