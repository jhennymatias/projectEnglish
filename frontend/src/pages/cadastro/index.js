import React, {useState, Fragment} from 'react';
import './style.css'
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api'
import {FiList, FiBookOpen, FiCheckCircle} from "react-icons/fi";

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
        <Fragment>
            <div className="header">
                <h2>Project English</h2>
                <Link className = "btn-header" to = "/lista"><FiList size={25} color = "#0073FB"/></Link>
                <Link className = "btn-header" to = "/test"><FiCheckCircle size={25} color = "#0073FB"/></Link>
                <Link className = "btn-header" to = "/grupo"><FiBookOpen size={25} color = "#0073FB"/></Link>    
            </div>
            <div className="content">
                <section className = "form">
                    <h1>Register words</h1>
                    <p>The more words you register the more you will be learning.</p>
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
        </Fragment>
    );
} 
