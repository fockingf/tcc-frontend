import styled from 'styled-components';
export const Container = styled.div`
    background: black;
    padding: 0 30px;

    img#logounivali {
        width: 50px;
    }
    #sports {
        color: #ff6e11;
        font-size: 20px;
    }

    #reserve {
        color: #fff;
        font-size: 20px;
        font-weight: 100;
        font-family: 'Roboto', sans-serif;
        padding-right: 10px;
    }
`;
export const Content = styled.div`
    height: 64px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;
    }

    #logo {
        margin-right: 20px;
        padding-right: 20px;
        border-right: 1px solid white;
    }
    a {
        font-weight: bold;
        color: white;
    }

    aside {
        display: flex;
        align-items: center;
        color: white;
    }
`;
export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid white;
    div {
        text-align: right;
        margin-right: 10px;
        strong {
            display: block;
            color: white;
        }

        a {
            display: block;
            margin-top: 2px;
            font-size: 12px;
            color: #daff89;
        }
    }
    
    img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    }
`;
