import React, {Component} from 'react';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';

export default class Detalhes extends Component{
    state ={
        word: {},
    };

    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`words/${id}`);
        this.setState({word: response.data});
    }

    render(){
        const { word } =this.state;
        return(
           <div className="word-info">
               <h1>{word.wordEnglish}</h1>
               <p><a>Translate: </a>{word.wordPortuguese}</p>
               <p><a>Description: </a>{word.Description}</p>
               <p><a>Synonymous: </a>{word.Syno}</p>
               <Link className="btn" to={'/lista'}>Voltar</Link>
           </div>
        );
    }
}
 