import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logoUnivaliBranco.png';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('O Nome completo é obrigatório'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
});

export default function SignUp() {
    const dispatch = useDispatch();
    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt='SportsReserve' id='logounivali' />
            <br />
            <span id='sports'>Sports</span>
            <span id='reserve'>Reserve</span>
            <Form onSubmit={handleSubmit} schema={schema}>
                <Input name='name' type='text' placeholder='Nome completo' />
                <Input name='email' type='email' placeholder='Seu e-mail' />
                <Input
                    name='password'
                    type='password'
                    placeholder='Sua senha'
                />
                <button type='submit'>Criar conta</button>
                <Link to='/'>Já possuo login</Link>
            </Form>
        </>
    );
}
