import React, { useRef } from 'react';

export default function ImportReport(props) {
    const inputRep = useRef(null);
    const onChange = () => {
        const file = inputRep.current.files[0];
    };
    return (
        <form onChange={onChange}>
            <div className='form-group'>
                <label htmlFor='input-report'>Імпортувати звіти</label>
                <input type='file' className='form-control-file' id='input-report' accept='.csv' ref={inputRep}/>
            </div>
        </form>
    );
}