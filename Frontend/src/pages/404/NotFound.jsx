import { React } from "react";
import { useHistory } from 'react-router-dom'
import Button from "../../components/Button";
import './NotFound.css'

const NotFound = () => {
    const history = useHistory()

    const handleDatasClick = () => {
        history.push('/')
    }

    return (
        <>
            <form>
                <div className='container-not-found'>
                    <h2>Página não encontrada</h2>
                    <div className='label-not-found'>
                        <label>Volta para a base</label>
                    </div>
                    <div className='button-not-found'>
                        <Button id='btn-datas-not-found' onClick={handleDatasClick} children='Base'></Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default NotFound;