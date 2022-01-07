import PropTypes from 'prop-types'
import React from "react";

const Header = ({title}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <p><a href="https://apod.nasa.gov/apod/archivepix.html">Discover the cosmos!</a> Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
        </header>
    )
}

Header.defaultProps = {
    title: 'Astronomy Picture of the Day',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header