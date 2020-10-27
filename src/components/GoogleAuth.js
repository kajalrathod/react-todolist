import React, { useEffect, useContext, useState, useRef } from 'react';
import { ItemContext } from './context/ItemContext';

export const GoogleAuth = () => {
    const [isSignedIn, setIsSignedIn] = useState(null);
    const [userName, setUserName] = useState(null);
    const [id, setId] = useState(null);
    const auth = useRef();
    const { signIn, signOut } = useContext(ItemContext);

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '182566283335-qvk3kk8rsdfvhgaudu2dur7aoc5t4vnj.apps.googleusercontent.com',
                fetch_basic_profile: true,
                scope: 'profile email'
            }).then(() => {
                auth.current = window.gapi.auth2.getAuthInstance();
                onAuthChange(auth.current.isSignedIn.get(), auth.current);
                setIsSignedIn(auth.current.isSignedIn.get());
            })
        });
    },[]);

    const onAuthChange = (isSignedIn, auth) => {
        if (isSignedIn) {
            const userName = auth.currentUser.get().getBasicProfile().getName();
            const userId = auth.currentUser.get().getId();
            setId(userId);
            setUserName(userName);
        }
        else {
            //console.log("status :" + isSignedIn)
            setUserName(null);
        }
    }

    const onSignInClick = () => {
       // auth.current.signIn().then(() => window.location.reload());
        auth.current.signIn();
        signIn(id);
    }

    const onSignOutClick = () => {
        //auth.current.signOut().then(() => window.location.reload()); 
        auth.current.signOut();
        signOut(id);
    }

    const renderButtton = () => {
        if (isSignedIn === null) {
            return null;
        } else if (isSignedIn) {
            return <div >Hello {userName},
            <br />
                <button onClick={onSignOutClick} className="ui red google button" >
                    <i className="google icon" />
                    Sign Out
                </button>
            </div>
        }
        else {
            return <div>   <button onClick={onSignInClick} className="ui red google button" >
                <i className="google icon" />
            Sign In with Google
        </button></div>
        }
    }

    return (
        <div style={{float:'right'}}>
            {renderButtton()}
        </div>
    );

}