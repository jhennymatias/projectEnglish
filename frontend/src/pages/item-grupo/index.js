import React, {Component} from 'react';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';

export default class Detalhes extends Component{
    state ={
        words: [],
    };
    
    async componentDidMount(){
        this.loadWords();
    }

    loadWords = async()=>{
        const { match: { params } } = this.props;
        const Tag = params.tag;
        const response = await api.get(`subtag/${Tag}`);
        this.setState({words:response.data})
    };

    render(){
        const {words} =this.state;
        return(
           <div className="word-list">
                     {this.state.wordEnglish}
                 {words.map(word =>(
                    <article key={word._id}>
                        <strong>{word.wordEnglish}</strong>
                        <p>Translate: {word.wordPortuguese}</p>
                        <p>Description: {word.Description}</p>
                        <p>Synonymous: {word.Syno}</p>
                    </article>
                 ))}    
           </div>
        );
    }
}
 