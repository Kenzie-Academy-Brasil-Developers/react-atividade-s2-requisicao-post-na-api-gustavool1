import axios from "axios"
// import './style.css'
import Display from "../Display"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from "react"
import Formulario from "./style"
const Form = () =>{
    const [ errorUser, setErrorUser ] = useState(null)
    const [ showMessage, setShowMessage ] = useState(false)
    
    const formScheme = yup.object().shape({
        username: yup.string().required("Campo usuário é obrigatório"),
        password: yup.string().required("Campo senha é obrigatório ")
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formScheme)
    })
    
    const HandleOnSubmit = (formData) =>{
        axios.post("https://kenzieshop.herokuapp.com/sessions/", formData)
         .then((response)=>{
            setShowMessage(true)
            setErrorUser(true)
         })
         .catch((err) =>{
            setShowMessage(true)
            setErrorUser(false)
         })
       
    }
    
    return(
        <>
        <h1>Axios-Post</h1>
            <Formulario onSubmit={handleSubmit(HandleOnSubmit)}>
                <input type='text' placeholder='Insira seu usuário'{...register('username')} />
                {errors.username&& <p className='error-msg'>{errors.username.message }</p>}
                <input type='password' placeholder='Insira sua senha' {...register('password')}/>
                {errors.password && <p className='error-msg'>{errors.password.message }</p>}
                <button type='submit'>Enviar</button>
                { showMessage && (
                    <Display errorUser={errorUser} />
                )}
            </Formulario>
        </>
    )
}

export default Form