import React from 'react';
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from '~/components/Header/styles';
import Notifications from '~/components/Notifications';

export default function Header() {
    const profile = useSelector(state => state.user.profile);
    return (
        <Container>
            <Content>
                <nav>
                    <div id='logo'>
                        <span id='sports'>Sports</span>
                        <span id='reserve'>Reserve</span>
                    </div>
                    <Link to='/dashboard'>DASHBOARD</Link>
                </nav>
                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to='/profile'>Meu Pefil</Link>
                        </div>
                        <img
                            src={(profile.avatar && profile.avatar.url) || `https://api.adorable.io/avatars/50/abott@adorable.png`}
                            alt={profile.name}
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
