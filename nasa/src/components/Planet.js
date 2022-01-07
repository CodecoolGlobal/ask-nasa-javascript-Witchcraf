import Media from './Media'
import ImageTitle from './ImageTitle'
import Explanation from './Explanation'
import ImageDate from './ImageDate'
import React from 'react';

const Planet = ({planets}) => {
    //console.log(planets)
    for (let planet of planets) {
        return(
            <div className='header'>
                <div className='header'>
                    <ImageDate planet={planet} />
                    <Media planet={planet}/>
                    <ImageTitle planet={planet} />
                    <Explanation planet={planet} />
                </div>
            </div>

        )
    }
    
}

export default Planet