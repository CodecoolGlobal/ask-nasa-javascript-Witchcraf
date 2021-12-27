import PropTypes from 'prop-types'

const Header = ({title}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
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