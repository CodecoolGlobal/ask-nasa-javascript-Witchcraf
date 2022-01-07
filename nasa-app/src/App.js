import React from 'react';
import Header from './components/Header'
import Planet from './components/Planet'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class App extends React.Component {

        // Constructor
        constructor(props) {
            super(props);

            this.state = {
                items: [],
                DataisLoaded: false,
                day: new Date(),
            };
            this.onChange = this.onChange.bind(this);
        }

        // ComponentDidMount is used to
        // execute the code
        componentDidMount() {
            const DEMO_KEY = 'IKCprAisLHN808TsA7nf2x6L2SINwTUH0zasB7QG';
            //Fetch currentDay
            fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}`)
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        items: json,
                        DataisLoaded: true
                    });
                })

        }

    onChange = (date) => {
        this.setState({day: date});
    }

    render() {
            const { DataisLoaded, items, day } = this.state;
            if (!DataisLoaded) return <div>
                <h1> Pleses wait some time.... </h1> </div> ;

            return (
                <div className = "App">
                    <DatePicker onChange={(date, dateString) => this.onChange(date, dateString)}
                                maxDate={new Date()}/>
                    <Header />
                    <Planet planet={items} day={day} />
                </div>
            );
        }
    }

export default App;

