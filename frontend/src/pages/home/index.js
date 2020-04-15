import React, {Component} from 'react';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';


export default class Home extends Component{
    state ={
        words: [],
    };
    componentDidMount(){
        this.OneWord();
    }

    OneWord = async()=>{
        const response = await api.get("/wordss");
        this.setState({words:response.data})

    };

    
    
    render(){
        return( 
            <div className="tudo">
                <h1>Word Day</h1>
           
                <div className= "word">
                    
                        <article>
                                <strong>{this.state.words.wordEnglish}</strong> 
                                <p>{this.state.words.wordPortuguese}</p>
                                <p>{this.state.words.Description}</p>
                                <p>{this.state.words.Syno}</p>
                        </article> 
                </div>
                <div className="novobtn">
                        <Link className = "btn" to = "/lista">Ver todas as palavras</Link>
                    </div>
            </div>
        )
    }
}





