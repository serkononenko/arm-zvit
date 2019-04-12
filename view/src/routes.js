import React from 'react';

const RegistrationForm = React.lazy(() => import('./Components/Forms/RegistrationForm/RegistrationForm'));
const LogonForm = React.lazy(() => import('./Components/Forms/LogonForm/LogonForm'));
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
                component: LogonForm,
                isExact: true
            },
            {
                path: '/registration',
                component: RegistrationForm,
                isExact: false
            }
        ];
    }
};

export default routes;