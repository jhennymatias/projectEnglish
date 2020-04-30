import React, {Component, Fragment} from 'react';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';

import {FiList, FiPlusCircle, FiCheckCircle} from "react-icons/fi";

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
            <Fragment>
                <div className="header">
                    <h2>Project English</h2>
                    <Link className = "btn-header" to = "/lista"><FiList size={25} color = "#0073FB"/></Link>
                    <Link className = "btn-header" to = "/test"><FiCheckCircle size={25} color = "#0073FB"/></Link>
                    <Link className = "btn-header" to = "/cadastro"><FiPlusCircle size={25} color = "#0073FB"/></Link>    
                </div>
                <div className="word-list">
                    {words.map(function(word, i){
                    return( 
                    <article key={i}>
                        <strong>{word}</strong> 
                        <Link className="btn" to={`/itemgrupo/${word}`} >Veja as palavras</Link>
                    </article>) 
                    })}
                </div>
            </Fragment>
            
        )
    }
}




