import React from 'react';
import './styles.css';

function ProgressBar() {
    return (
        <div data-testid="progressBar" className="mw-100">
            <span className="progress-root">
                <span className="animated1" />
                <span className="animated2" />
            </span>
        </div>
    );
}
export default ProgressBar;
