import React from 'react';
import classes from './fail.module.css';

const Fail = () => {
    return (
        <div className={classes.failWrapper}>
            <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'>
                <path
                    id='Fail'
                    d='M-.308,4.116a15.073,15.073,0,0,0,15-14.993,15.1,15.1,0,0,0-15-15.007,15.085,15.085,0,0,0-15,15.007A15.073,15.073,0,0,0-.308,4.116ZM-5.159-4.549A1.485,1.485,0,0,1-6.652-6.056a1.422,1.422,0,0,1,.445-1.033l3.775-3.773L-6.207-14.65a1.422,1.422,0,0,1-.445-1.033,1.473,1.473,0,0,1,1.493-1.492,1.439,1.439,0,0,1,1.077.43l3.775,3.759,3.789-3.759a1.39,1.39,0,0,1,1.077-.445A1.473,1.473,0,0,1,6.051-15.7a1.369,1.369,0,0,1-.445,1.033l-3.789,3.8L5.592-7.1a1.454,1.454,0,0,1,.445,1.047A1.485,1.485,0,0,1,4.544-4.549a1.482,1.482,0,0,1-1.091-.445L-.308-8.739-4.068-4.994A1.408,1.408,0,0,1-5.159-4.549Z'
                    transform='translate(15.308 25.884)'
                    fill='#d53943'
                ></path>
            </svg>
            <h2>Fail</h2>
        </div>
    );
};

export default Fail;
