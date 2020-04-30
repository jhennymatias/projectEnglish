import React, {useState} from 'react';
import './style.css'
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api'

export default function NewWord() {
    const[wordEnglish, setwordEnglish] = useState('')
    const[wordPortuguese, setwordPortuguese] = useState('')
    const[Description, setDescription] = useState('')
    const[Syno, setSyno] = useState('')
    const[Tag, setTag] = useState('')
    const history = useHistory();

    async function handleNewWord(e){
        e.preventDefault();
    
        const data  = {
            wordEnglish,
            wordPortuguese,
            Description,
            Syno,
            Tag,
        };

        try{
            await api.post('words',data)
        }catch(err){
            alert("Erro ao cadastrar palavra")
        }
        history.push('/');
    }
    return (
        
        <div className = "word-container">
            <div className="content">
                <section className = "form">
                    <h1>Cadastrar nova palavra</h1>
                    <Link className="back-link" to = "/lista"> Voltar </Link>
                </section>
                    
                <form  onSubmit = {handleNewWord} >
                        <input 
                            id = 'english'
                            placeholder="Word English"
                            value = {wordEnglish}
                            onChange = {e => setwordEnglish(e.target.value)}
                        />
                        <input 
                            id = 'portuguese'
                            placeholder="Word Portuguese"
                            value = {wordPortuguese}
                            onChange = {e => setwordPortuguese(e.target.value)}
                        />
                        <textarea 
                            id = 'description'
                            placeholder="Description"
                            value = {Description}
                            onChange = {e => setDescription(e.target.value)}
                        ></textarea>
                        <input  
                            id = 'syno'
                            placeholder="Synonymus"
                            value = {Syno}
                            onChange = {e => setSyno(e.target.value)}
                        />
                        <input  
                            id = 'tag'
                            placeholder="Tag"
                            value = {Tag}
                            onChange = {e => setTag(e.target.value)}
                        />
                        
                        <button type="submit" id="btn_e"className= "btn">Register</button>
                </form>
            </div>
        </div>
    );
} 
