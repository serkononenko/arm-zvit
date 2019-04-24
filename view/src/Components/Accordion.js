import React from 'react';
import PropTypes from 'prop-types';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
    return (
        <div className='accordion'>
            {
                data.map((item) => {
                    return <AccordionItem name={item.name} key={item._id} />;
                })
            }
        </div>
    );
};

Accordion.propTypes = {
    data: PropTypes.array
};

export default Accordion;