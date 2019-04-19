import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AccordionItem = ({ name }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='card'>
            <div className='card-header'>
                <h2 className='mb-0'>
                    <button className={isOpen ? 'btn btn-link' : 'btn btn-link collapsed'} onClick={() => setIsOpen(prevState => !prevState)}>
                        {name}
                    </button>
                </h2>
            </div>
            <div className={isOpen ? 'collapse show' : 'collapse'}>
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