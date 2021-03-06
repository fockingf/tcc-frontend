import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { Form, Input } from '@rocketseat/unform';
import {signOut} from "~/store/modules/auth/actions";
import { updateProfileRequest } from '~/store/modules/user/actions';
import AvatarInput from '~/pages/Profile/AvatarInput';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);
    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    function handleSignOut() {
        dispatch(signOut())

    }
    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name='avatar_id' />
                <Input name='name' placeholder='Nome Completo' />
                <Input name='email' type='email' placeholder='Seu E-mail' />
                <hr />
                <Input
                    name='oldPassword'
                    type='password'
                    placeholder='Senha atual'
                />
                <Input
                    name='password'
                    type='password'
                    placeholder='Nova senha'
                />
                <Input
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirme sua nova senha'
                />
                <button type='submit'>Atualizar Perfil</button>
            </Form>
            <button type='button' onClick={handleSignOut}>Sair do SportsReserve</button>
        </Container>
    );
}
