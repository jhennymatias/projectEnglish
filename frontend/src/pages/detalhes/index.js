import React, {Component, Fragment} from 'react';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';
import {FiList, FiBookOpen, FiCheckCircle} from "react-icons/fi";

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
        <Fragment>
            <div className="header">
                <h2>Project English</h2>
                <Link className = "btn-header" to = "/lista"><FiList size={25} color = "#0073FB"/></Link>
                <Link className = "btn-header" to = "/test"><FiCheckCircle size={25} color = "#0073FB"/></Link>
                <Link className = "btn-header" to = "/grupo"><FiBookOpen size={25} color = "#0073FB"/></Link>    
            </div>
            <div className="word-info">
               <h1>{word.wordEnglish}</h1>
               <p><a>Translate: </a>{word.wordPortuguese}</p>
               <p><a>Description: </a>{word.Description}</p>
               <p><a>Synonymous: </a>{word.Syno}</p>
               <p><a>Tag: </a>{word.Tag}</p>
               <Link className="btn" to={'/lista'}>Voltar</Link>
           </div>
        </Fragment>
         
        );
    }
}
 