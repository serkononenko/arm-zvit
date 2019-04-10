import React from 'react';
import './LoadIndicator.css';

export default function LoadIndicator() {
    return (
        <div className="d-flex justify-content-center LoadIndicator">
            <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}