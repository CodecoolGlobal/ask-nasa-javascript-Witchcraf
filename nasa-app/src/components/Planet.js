import PropTypes from 'prop-types'
import Media from './Media'
import ImageTitle from './ImageTitle'
import Explanation from './Explanation'
import Date from './Date'

const Planet = ({planet}) => {

    return (
        <div className='header'>
            <Date planet={planet} />
            <Media planet={planet}/>
            <ImageTitle planet={planet} />
            <Explanation planet={planet} />
        </div>
    )
}

export default Planet