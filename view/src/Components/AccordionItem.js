import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AccordionItem.css';

const AccordionItem = ({ name }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className='card'>
            <div className='card-header'>
                <h2 className='mb-0'>
                    <button className={isOpen ? 'btn btn-link' : 'btn btn-link collapsed'} onClick={handleClick}>
                        {name}
                    </button>
                </h2>
            </div>
            <div className={isOpen ? 'accordion-item_show collapsing' : 'collapsing'}>
                <div className='card-body'>
                    erondon
                </div>
            </div>
        </div>
    );
};

AccordionItem.propTypes = {
    name: PropTypes.string
};

export default AccordionItem;