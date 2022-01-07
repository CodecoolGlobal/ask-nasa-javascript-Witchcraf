import React  from 'react';


const Explanation = ({planet}) => {

    return (
        <p className='explanation'>
            <b>Explanation:</b>{planet.explanation}
        </p>
    )
}

export default Explanation