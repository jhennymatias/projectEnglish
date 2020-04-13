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
        const response = await api.get("/words");
        this.setState({words:response.data})
        console.log(response)
    };

    render(){
        const {words} =this.state;
        return(
            <div className="word-list">
                {this.state.wordEnglish}
                {words.map(word =>(
                <article key={word._id}>
                    <strong>{word.wordEnglish}</strong>            
                    <Link to={`/detalhes/${word._id}`} >Saiba mais</Link>
                </article> 
                ))}
            </div>
        )
    }
}




