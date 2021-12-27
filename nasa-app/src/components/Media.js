import PropTypes from 'prop-types'

const Media = ({planet}) => {
    const type = planet.media_type;
    const urladdress = planet.url;

    if (type === 'image') {
        return (<img src={urladdress} alt="planet"/>)
    }
    if(type != 'image') {
        return (
            <iframe src={urladdress}></iframe>
        )
    }
}

export default Media