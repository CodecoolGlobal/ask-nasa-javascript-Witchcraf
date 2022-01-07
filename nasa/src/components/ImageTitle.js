import React  from 'react';


const ImageTitle = ({planet}) => {
    

    return (
        <p className='imageTitle'>
            <b>{planet.title}</b>
        </p>
    )
}

export default ImageTitle