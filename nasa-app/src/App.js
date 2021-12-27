import React from "react";

class App extends React.Component {

        // Constructor
        constructor(props) {
            super(props);

            this.state = {
                items: [],
                DataisLoaded: false
            };
        }

        // ComponentDidMount is used to
        // execute the code
        componentDidMount() {
            const DEMO_KEY = 'IKCprAisLHN808TsA7nf2x6L2SINwTUH0zasB7QG';
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
        render() {
            const { DataisLoaded, items } = this.state;
            if (!DataisLoaded) return <div>
                <h1> Pleses wait some time.... </h1> </div> ;

            return (
                <div className = "App">
                    <h1> Fetch data from an api in react </h1>  {
                        <ol>
                            title: { items.title },
                            date: { items.date }
                        </ol>

                }
                </div>
            );
        }
    }

export default App;

