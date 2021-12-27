import PropTypes from 'prop-types'

const Explanation = ({planet}) => {

    return (
        <p className='explanation'>
            <b>Explanation:</b>{planet.explanation}
        </p>
    )
}

export default Explanation