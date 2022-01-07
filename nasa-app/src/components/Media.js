import React from 'react';

const Media = ({planet}) => {
    const type = planet.media_type;
    const urladdress = planet.url;
    const emb = urladdress.replace("http://www.youtube.com/watch?v=", "http://www.youtube.com/embed/");

    if (type === 'image') {
        return (<img src={urladdress} alt="planet"/>)
    }

    if(type !== 'image') {
        return (
            <iframe width="960" height="540" src={emb}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""></iframe>
        )
    }
}

export default Media