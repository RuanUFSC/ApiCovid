import api from '../../services/api'
import { useState } from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import './SendFile.css'

const SendFile = () => {
    const history = useHistory()
    const [file, setFile] = useState()

    const handleSeeRegisterClick = () => {
        history.push('/register')
    }
    const handleSeeDatasClick = () => {
        history.push('/')
    }
    const handleSendFileClick = () => {
        let data = new FormData();
        data.append("file", file);

        api.post('data/file', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    const handleChange = (event) => {
        setFile(event.target.files[0])
    }

    return (
        <div className='container-send'>
            <div className='container-titulo-send'>
                <h2 className='titulo'>Enviar um arquivo CSV</h2>
            </div>
            <div className='file-container'>
                <input type='file' className='arquivo' name='file' onChange={handleChange} />
            </div>
            <div className='button-group'>
                <Button id='btn' children='Enviar' onClick={handleSendFileClick}></Button>
            </div>  
            <div className='button-group3'>  
                <div className='button-group2'>
                <Button id='btn' children='Registrar' onClick={handleSeeRegisterClick}></Button>
                </div>
                <div className='button-group2'>
                <Button id='btn' children='Ver dados' onClick={handleSeeDatasClick}></Button>
                </div>
            </div>
        </div >
    );
}

export default SendFile;