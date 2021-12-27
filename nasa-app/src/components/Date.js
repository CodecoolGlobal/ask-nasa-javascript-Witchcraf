import PropTypes from 'prop-types'

const Date = ({planet}) => {

    return (
        <p className='date'>
            <b>{planet.date}</b>
        </p>
    )
}

export default Date