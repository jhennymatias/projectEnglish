import React, {useState} from 'react';
import './style.css'
import {Link} from 'react-router-dom';
import api from '../../services/api'

export default function NewWord() {
    const[wordEnglish, setwordEnglish] = useState('')
    const[wordPortuguese, setwordPortuguese] = useState('')
    const[Description, setDescription] = useState('')
    const[Syno, setSyno] = useState('')
  
    async function handleNewWord(e){
        e.preventDefault();
    
        const data  = {
            wordEnglish,
            wordPortuguese,
            Description,
            Syno,
        };

        try{
            await api.post('words',data)
            alert("jhenny");
        }catch(err){
            alert("Erro ao cadastrar palavra")
        }

        console.log(data);
    }
    return (
        
        <div className = "new-container">
            <div className="content">
                <section className = "form">
                    <h1>Cadastrar nova palavra</h1>
                    <p>Descreva a palavra detalhadamente para melhorar o resultado</p>
                    <Link className="back-link" to = "/">
                    Voltar 
                    </Link>
                </section>
                    
                <form  onSubmit = {handleNewWord} >
                        <input 
                            placeholder="Word English"
                            value = {wordEnglish}
                            onChange = {e => setwordEnglish(e.target.value)}
                        />
                        <input 
                            placeholder="Word Portuguese"
                            value = {wordPortuguese}
                            onChange = {e => setwordPortuguese(e.target.value)}
                        />
                        <textarea 
                            placeholder="Description"
                            value = {Description}
                            onChange = {e => setDescription(e.target.value)}
                        ></textarea>
                        <input  
                            placeholder="Synonymus"
                            value = {Syno}
                            onChange = {e => setSyno(e.target.value)}
                        />
                        
                        <button type="submit" className= "btn">Register</button>
                </form>
            </div>
        </div>
    );
} 