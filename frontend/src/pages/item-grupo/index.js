import React, {Component, Fragment} from 'react';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';

import {FiTrash2, FiPlusCircle, FiBookOpen, FiCheckCircle} from "react-icons/fi";

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
            <Fragment>
                <div className="header">
                    <h2>Project English</h2>
                    <Link className = "btn-header" to = "/cadastro"><FiPlusCircle size={25} color = "#0073FB"/></Link>
                    <Link className = "btn-header" to = "/test"><FiCheckCircle size={25} color = "#0073FB"/></Link>
                    <Link className = "btn-header" to = "/grupo"><FiBookOpen size={25} color = "#0073FB"/></Link>    
                </div>
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
            </Fragment> 
        );
    }
}
 