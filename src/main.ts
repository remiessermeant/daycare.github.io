import { Amplify } from 'aws-amplify';

if (!process.env.REACT_APP_AWS_USER_POOL_ID) throw new Error('Missing REACT_APP_AWS_USER_POOL_ID');
if (!process.env.REACT_APP_AWS_USER_POOL_CLIENT_ID) throw new Error('Missing REACT_APP_AWS_USER_POOL_CLIENT_ID');

const userPoolId = process.env.REACT_APP_AWS_USER_POOL_ID;
const userPoolClientId = process.env.REACT_APP_AWS_USER_POOL_CLIENT_ID;

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: userPoolId,
            userPoolClientId: userPoolClientId,
            identityPoolId: '',
            loginWith: {
                email: true,
            },
            signUpVerificationMethod: 'code',
            userAttributes: {
                email: {
                    required: true,
                },
            },
            allowGuestAccess: true,
            passwordFormat: {
                minLength: 8,
                requireLowercase: true,
                requireUppercase: true,
                requireNumbers: true,
                requireSpecialCharacters: true,
            },
        },
    },
});
