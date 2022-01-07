import React, {useState} from 'react';
import '../App.css';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'

const Gallery = ({gallery}) => {
    const [displayModal, setDisplayModal] = useState(false)
    const [currentPlanet, setCurrentPlanet] = useState([])

    const handleClickGallery = (event, planet) => {
        setDisplayModal(!displayModal)
        setCurrentPlanet(planet)
    }

    //iframe too!
   return (
        <>
            <h2> Gallery</h2>
            <div className='gallery'>
            {gallery.map((planet, index) => (
                <img  key={index} src={planet.url} alt="planet" onClick={
                    (event) => handleClickGallery(event, planet)}/>
            ))}
            </div>
            <div>
                {!displayModal ? (
                    <p></p>
                ):(
                   <MyVerticallyCenteredModal planet={currentPlanet}  >

                   </MyVerticallyCenteredModal>
                )}

            </div>
        </>
    )


}

export default Gallery