import React from 'react';

const RegistrationFormContainer = React.lazy(() => import('./Containers/RegistrationFormContainer'));
const LogonFormContainer = React.lazy(() => import('./Containers/LogonFormContainer'));
const UserProfile = React.lazy(() => import('./Components/UserProfile/UserProfile'));
const MainPage = React.lazy(() => import('./Components/MainPage/MainPage'));
const AdminPage = React.lazy(() => import('./Components/AdminPage/AdminPage'));

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
                component: UserProfile,
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