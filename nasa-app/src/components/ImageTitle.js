import PropTypes from 'prop-types'

const ImageTitle = ({planet}) => {

    return (
        <p className='imageTitle'>
            <b>{planet.title}</b>
        </p>
    )
}

export default ImageTitle