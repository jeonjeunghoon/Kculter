import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "1027180645834-6ahbfkt1ghv57opj2cmiuf25sekcqcn8.apps.googleusercontent.com";

export default function GoogleLoginBtn({ onGoogleLogin }){
    const onSuccess = async(response) => {
 
        console.log(response);
    }

    

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={onSuccess}
                onError={onFailure}
            />
            </GoogleOAuthProvider>
        </div>
    )
}