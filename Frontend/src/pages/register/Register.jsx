import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { PostData } from "../../services/Datas";
import Button from "../../components/Button";
import './Register.css'

const Register = () => {
    const [values, setValues] = useState({
        data_notificacao: '',
        data_primeiros_sintomas: '',
        data_teste: '',
        data_obito: '',
        data_nascimento: '',
        faixa_idade: '',
        sexo: '',
        raca: '',
        bairro: '',
        municipio: '',
        centro_saude:'',
        tipo_teste:'',
        dor_garganta:'',
        dispneia:'',
        febre: '',
        tosse: '',
        obito: '',
        internado_uti: ''
    })
    const history = useHistory()


    const handleValuesChange = e => {
        console.log(e.target.name)
        console.log(e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleRegisterClick = async () => {

        const [hasErrors, response] = await PostData(values)

        if (hasErrors) return console.log('Erro')

        console.log(response)
    }

    const handleSeeDataClick = () => {
        history.push('/')
    }

    const handleSendFileClick = () => {
        history.push('/send-File')
    }

    return (
        <>
            <form className='form-register'>
                <h2>Registro de paciente</h2>

                <div className='container-register'>
                    <div className='form-group'>
                        <label htmlFor='data_notificacao'>Data de notificação: </label>
                        <input type='date' name='data_notificacao' id='data_notificacao' onChange={handleValuesChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='data_primeiros_sintomas'>Data de primeiros sintomas: </label>
                        <input type='date' name='data_primeiros_sintomas' id='data_primeiros_sintomas' onChange={handleValuesChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='data_teste'>Data do teste: </label>
                        <input type='date' name='data_teste' id='data_teste' onChange={handleValuesChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='data_obito'>Data do óbito: </label>
                        <input type='date' name='data_obito' id='data_obito' onChange={handleValuesChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='data_nascimento'>Data do nascimento: </label>
                        <input type='date' name='data_nascimento' id='data_nascimento' onChange={handleValuesChange}/>
                    </div>
                    <div className='form-group3'>
                        <label htmlFor='faixa_idade'>Faixa de idade: </label>
                        <div className='form-group2'>
                        <select name='faixa_idade' id='faixa_idade' onChange={handleValuesChange}>
                        <option value="ATÃ‰ 9 ANOS">Até 9 anos</option>
                        <option value="10 A 19 ANOS">De 10 a 19</option>
                        <option value="20 A 29 ANOS">De 20 a 29</option>
                        <option value="30 A 39 ANOS">De 30 a 39</option>
                        <option value="40 A 49 ANOS">De 40 a 49</option>
                        <option value="50 A 59 ANOS">De 50 a 59</option>
                        <option value="60 A 69 ANOS">De 60 a 69</option>
                        <option value="70 A 79 ANOS">De 70 a 79</option>
                        <option value="80 A 89 ANOS">De 80 a 89</option>
                        <option value="90 ANOS OU MAIS">90 anos ou mais</option></select>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='sexo'>Sexo: </label>
                        <div className='radio-container'>
                            <input type='radio' name='sexo' className='radio' value='M' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Masculino</label>
                            <input type='radio' name='sexo' className='radio' value='F' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Feminino</label>
                        </div>
                    </div>
                    <div className='form-group3'>
                        <label htmlFor='raca'>Raça: </label>
                        <div className='form-group2'>
                        <select name='raca' id='raca' onChange={handleValuesChange}>
                        <option value="AMARELA">Amarela</option>
                        <option value="BRANCA">Branca</option>
                        <option value="INDÃGENA">Indígena</option>
                        <option value="NÃƒO INFORMADO">Não informado</option>
                        <option value="PARDA">Parda</option>
                        <option value="PRETA">Preta</option></select>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='bairro'>Bairro: </label>
                        <input type='text' name='bairro' id='bairro' onChange={handleValuesChange} placeholder='Coloque o bairro' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='municipio: '>Município: </label>
                        <input type='text' name='municipio' id='municipio' onChange={handleValuesChange} placeholder='Coloque o município' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='centro_saude: '>Centro de saúde: </label>
                        <input type='text' name='centro_saude' id='centro_saude' onChange={handleValuesChange} placeholder='Coloque o centro de saúde' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='tipo_teste: '>Tipo de teste: </label>
                        <input type='text' name='tipo_teste' id='tipo_teste' onChange={handleValuesChange} placeholder='Coloque o tipo de teste' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='dor_garganta'>Dor de garganta: </label>
                        <div className='radio-container'>
                            <input type='radio' name='dor_garganta' className='radio' value='SIM' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Sim</label>
                            <input type='radio' name='dor_garganta' className='radio' value='NÃO' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Não</label>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='dispneia'>Dispneia: </label>
                        <div className='radio-container'>
                            <input type='radio' name='dispneia' className='radio' value='SIM' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Sim</label>
                            <input type='radio' name='dispneia' className='radio' value='NÃO' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Não</label>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='febre'>Febre: </label>
                        <div className='radio-container'>
                            <input type='radio' name='febre' className='radio' value='SIM' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Sim</label>
                            <input type='radio' name='febre' className='radio' value='NÃO' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Não</label>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='tosse'>Tosse: </label>
                        <div className='radio-container'>
                            <input type='radio' name='tosse' className='radio' value='SIM' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Sim</label>
                            <input type='radio' name='tosse' className='radio' value='NÃO' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Não</label>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='obito'>Óbito: </label>
                        <div className='radio-container'>
                            <input type='radio' name='obito' className='radio' value='SIM' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Sim</label>
                            <input type='radio' name='obito' className='radio' value='NÃO' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Não</label>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='internado_uti'>Internado na UTI: </label>
                        <div className='radio-container'>
                            <input type='radio' name='internado_uti' className='radio' value='SIM' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Sim</label>
                            <input type='radio' name='internado_uti' className='radio' value='NÃO' onChange={handleValuesChange}></input>
                            <label className='radio-labels'>Não</label>
                        </div>
                    </div>
                </div>
                <div className='break'></div>
                <div className='button-group'>
                    <Button id='btn-see-data' children='Dados cadastrados' onClick={handleSeeDataClick}></Button>
                    <Button id='btn-archive' children='Registrar via arquivo' onClick={handleSendFileClick}></Button>
                    <Button id='btn-post-data' children='Registrar' onClick={handleRegisterClick}></Button>
                </div>
            </form>
        </>
    );
}

export default Register;