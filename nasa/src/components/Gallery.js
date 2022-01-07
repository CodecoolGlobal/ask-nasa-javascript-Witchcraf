import React from 'react';
import '../App.css';


const Gallery = ({gallery}) => {
   return (
        <>
            <h2> Gallery</h2>
            <div className='gallery'>
            {gallery.map((planet, index) => (
                <img key={index} src={planet.url} alt="planet"/>
            ))}
            </div>
        </>
    )


}

export default Gallery