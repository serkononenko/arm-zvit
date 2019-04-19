import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Accordion from '../Accordion/Accordion';

const DepartmentList = ({ department }) => {
    return <Accordion array={department} />;
};

DepartmentList.propTypes = {
    department: PropTypes.array
};

const mapStateToProps = (state) => {
    const { department } = state.department;
    return {
        department
    };
};

export default connect(mapStateToProps)(DepartmentList);