import React from 'react';
import classes from './success.module.css';

const Success = () => {
    return (
        <div className={classes.successWrapper}>
            <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'>
                <path
                    id='Path_1451'
                    data-name='Path 1451'
                    d='M-.308,4.116a15.073,15.073,0,0,0,15-14.993,15.1,15.1,0,0,0-15-15.007,15.085,15.085,0,0,0-15,15.007A15.073,15.073,0,0,0-.308,4.116ZM-2.245-3.273a1.913,1.913,0,0,1-1.493-.775l-4.12-4.964a1.633,1.633,0,0,1-.431-1.1,1.464,1.464,0,0,1,1.464-1.478,1.551,1.551,0,0,1,1.249.646l3.287,4.075,6.33-10.072a1.512,1.512,0,0,1,1.292-.832,1.464,1.464,0,0,1,1.536,1.392,2.186,2.186,0,0,1-.388,1.076L-.8-4.09A1.73,1.73,0,0,1-2.245-3.273Z'
                    transform='translate(15.308 25.884)'
                    fill='#9dd838'
                ></path>
            </svg>
            <h2>Success</h2>
        </div>
    );
};

export default Success;
