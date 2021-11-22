import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { LoadDatas } from "../../services/Datas";
import Button from "../../components/Button";
import './Datas.css'

const Datas = () => {
    const [datas, setDatas] = useState([])
    const history = useHistory()

    const loadTasks = async () => {
        const [hasErrors, response] = await LoadDatas()

        if (hasErrors) return console.log('Erro')


        for (let i = 0; i < response.datas.length; i++) {
            response.datas[i].data = new Date(response.datas[i].data).toLocaleDateString()
        }

        setDatas(response.datas)
    }

    const handleSeeRegisterClick = () => {
        history.push('/register')
    }

    const handleSendFileClick = () => {
        history.push('/send-File')
    }

    useEffect(() => {
        loadTasks()
    }, [])

    return (
        <div className='container-datas'>
            <div className='label-datas'>
                <label>Registros de Covid</label>
            </div>
            <div className='lista-datas'>
                <div className='titulos-datas'>
                    <p>Notificação</p>
                    <p>Primeiros sintomas</p>
                    <p>Teste</p>
                    <p>Óbito</p>
                    <p>Nascimento</p>
                    <p>Idade</p>
                    <p>Sexo</p>
                    <p>Raça</p>
                    <p>Bairro</p>
                    <p>Município</p>
                    <p>Centro</p>
                    <p>Teste</p>
                    <p>Dor de garganta</p>
                    <p>Dispneia</p>
                    <p>Febre</p>
                    <p>Tosse</p>
                    <p>Óbito</p>
                    <p>UTI</p>
                </div>
            </div>
            <ul className='lista-datas'>
                {datas.map(data => {
                    return (
                        <li key={data.id} >
                            <div className='data-container'>
                                <p>{data.data_notificacao}</p>
                                <p>{data.data_primeiros_sintomas}</p>
                                <p>{data.data_teste}</p>
                                <p>{data.data_obito}</p>
                                <p>{data.data_nascimento}</p>
                                <p>{data.faixa_idade}</p>
                                <p>{data.sexo}</p>
                                <p>{data.raca}</p>
                                <p>{data.bairro}</p>
                                <p>{data.municipio}</p>
                                <p>{data.centro_saude}</p>
                                <p>{data.tipo_teste}</p>
                                <p>{data.dor_garganta}</p>
                                <p>{data.dispneia}</p>
                                <p>{data.febre}</p>
                                <p>{data.tosse}</p>
                                <p>{data.obito}</p>
                                <p>{data.internado_uti}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className='button-group'>
                <Button id='btn-see-register' children='Registrar novo paciente' onClick={handleSeeRegisterClick}></Button>
                <Button id='btn-archive' children='Registrar via arquivo' onClick={handleSendFileClick}></Button>
            </div>
        </div >
    );
}

export default Datas;