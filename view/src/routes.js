import React from 'react';

const RegistrationFormContainer = React.lazy(() => import('./Containers/RegistrationFormContainer'));
const LogonFormContainer = React.lazy(() => import('./Containers/LogonFormContainer'));
const UserProfileContainer = React.lazy(() => import('./Containers/UserProfileContainer'));
const MainPage = React.lazy(() => import('./Components/MainPage'));
const AdminPage = React.lazy(() => import('./Components/AdminPage'));

const routes = (profile) => {
    if (profile) {
        return [
            {
                path: '/',
                component: MainPage,
                isExact: true
            },
            {
                path: '/administrator',
                component: AdminPage,
                isExact: false
            },
            {
                path: '/profile/:_id',
                component: UserProfileContainer,
                isExact: false
            }
        ];
    } else {
        return [
            {
                path: '/',
                component: LogonFormContainer,
                isExact: true
            },
            {
                path: '/registration',
                component: RegistrationFormContainer,
                isExact: false
            }
        ];
    }
};

export default routes;