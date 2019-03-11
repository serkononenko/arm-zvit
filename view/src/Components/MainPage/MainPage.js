import React from 'react';

import { connect } from 'react-redux';
import { toggleLogon } from '../../actions/actionCreators';

import ContentLayout from '../../Layouts/ContentLayout/ContentLayout';
import DepartmentInput from '../Forms/DepartmentForm/DepartmentInput';
import DepartmentList from '../DepartmentList/DepartmentList';
import UserList from '../UserList/UserList';

function MainPage(props) {
    return (
        <ContentLayout>
            <DepartmentInput />
            <DepartmentList />
            <button onClick={props.handleLogOut}>Log Out</button>
            <button onClick={props.toggleLogout}>Выход</button>
            <UserList />
        </ContentLayout>
    )
}

const mapStateToProps = (state) => {
    const { loggedIn } = state;
    return {
        loggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLogout: () => dispatch(toggleLogon(false))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);