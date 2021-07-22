import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import { toast } from 'react-toastify';
import {
    updateProfileFailure,
    updateProfileSuccess,
} from '~/store/modules/user/actions';

export function* updateProfile({ payload }) {
    try {
        const { name, email, avatarId, ...rest } = payload.data;
        const profile = Object.assign(
            { name, email, avatarId },
            rest.oldPassword ? rest : {}
        );
        const response = yield call(api.put, 'users', profile);

        toast.success('Perfil atualizado');

        yield put(updateProfileSuccess(response.data));
    } catch (e) {
        toast.error('Erro ao atualizar o perfil');
        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
