import React from 'react';
import PropTypes from 'prop-types';
import AccordionItem from '../AccordionItem/AccordionItem';

const Accordion = ({ array }) => {
    return (
        <div className='accordion'>
            {
                array.map((item) => {
                    return <AccordionItem name={item.name} key={item._id} />;
                })
            }
        </div>
    );
};

Accordion.propTypes = {
    array: PropTypes.array
};

export default Accordion;