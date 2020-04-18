import React, {Component} from 'react';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';


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
        const response = await api.get(`/words/${id.data[aux]._id}`);
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





