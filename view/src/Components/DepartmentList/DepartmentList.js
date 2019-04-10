import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DepartmentList = (props) => {
    const department = props.department.map((item) => {
        return (
            <div className="card" key={item._id}>
                <div className="card-header" id={'heading'+item._id}>
                    <h2 className="mb-0">
                        <button 
                            className="btn btn-link" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target={'#collapse'+item._id} 
                            aria-expanded="true" 
                            aria-controls={'collapse'+item._id}
                        >
                            {item.name}
                        </button>
                    </h2>
                </div>

                <div id={'collapse'+item._id} className="collapse" aria-labelledby={'heading'+item._id} data-parent="#accordion">
                    <div className="card-body">
                        {item._id}
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className='accordion' id='accordion'>
            {department}
        </div>
    );
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