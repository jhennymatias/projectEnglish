import React, {Component, Fragment} from 'react';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';

import {FiList, FiPlusCircle, FiBookOpen} from "react-icons/fi";

export default class Home extends Component{
    state ={
        words: [],
        cont:(''),
    };
    componentDidMount(){
        this.OneWord();
    }
    geraNumero(){
        var aux = Math.floor(Math.random() * 10);
        while (aux >= (this.state.cont)){
            aux = Math.floor(Math.random() * 10);
            console.log(aux)
        }
        return 3;
    }

    OneWord = async()=>{
        const id = await api.get("/test");
        this.setState({cont: id.data.length})
        const aux = this.geraNumero()
        console.log(aux);
        const response = await api.get(`/words/${id.data[0]._id}`);
        this.setState({words:response.data})
    };

    
    
    render(){
        return( 
            <Fragment>
                <div className="header">
                    <h2>Project English</h2>
                    <Link className = "btn-header" to = "/lista"><FiList size={25} color = "#0073FB"/></Link>
                    <Link className = "btn-header" to = "/grupo"><FiBookOpen size={25} color = "#0073FB"/></Link>
                    <Link className = "btn-header" to = "/cadastro"><FiPlusCircle size={25} color = "#0073FB"/></Link>    
                </div>
                <div className= "word">
                    <article>
                        <strong>{this.state.words.wordEnglish}</strong> 
                        <p>Translate: {this.state.words.wordPortuguese}</p>
                        <p>Description: {this.state.words.Description}</p>
                        <p>Synonymus: {this.state.words.Syno}</p>
                        <p>Tag: {this.state.words.Tag}</p>
                    </article> 
                    <Link className = "btn" to = "/lista">Access the full word list</Link>
                </div>
               
            </Fragment>
        )
    }
}





