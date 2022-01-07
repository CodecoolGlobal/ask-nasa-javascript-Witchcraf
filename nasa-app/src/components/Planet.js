import Media from './Media'
import ImageTitle from './ImageTitle'
import Explanation from './Explanation'
import ImageDate from './ImageDate'
import React from 'react';

const Planet = ({planet, day}) => {

    function convertDateToString(day) {
        var yyyy = day.getFullYear();
        var mm = day.getMonth() + 1;// getMonth() is zero-based
        var dd = day.getDate();
        const formattedDay = String(10000 * yyyy + 100 * mm + dd);
        const year = formattedDay.substring(0,4)
        const month = formattedDay.substring(4,6)
        const dayD = formattedDay.substring(6,8)
        const joinedDay = [year, month, dayD];
        return joinedDay.join("-");// Leading zeros for mm and dd
    }

    const formattedChoosenDay = convertDateToString(day)
    console.log(formattedChoosenDay);

    const formatteDactualdDay = convertDateToString(new Date());
    console.log(formatteDactualdDay)

    const DEMO_KEY = 'IKCprAisLHN808TsA7nf2x6L2SINwTUH0zasB7QG';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}&start_date=${formattedChoosenDay}&end_date=${formatteDactualdDay}`;

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
        })
    //console.log(json)

    if(formattedChoosenDay === formatteDactualdDay){
        return (
            <div className='header'>
                <ImageDate planet={planet} />
                <Media planet={planet}/>
                <ImageTitle planet={planet} />
                <Explanation planet={planet} />
            </div>

        )}
    return(
        <div className='header'>
            <p>PLease click here to see the details on the choosen day !</p>
            <div className='header'>
                <ImageDate planet={planet} />
                <Media planet={planet}/>
                <ImageTitle planet={planet} />
                <Explanation planet={planet} />
            </div>
        </div>

    )

}

Planet.defaultProps = {
    day: new Date(),
}


export default Planet