import React, {Component} from 'react';
import './App.css';
import Chips from 'react-chips'

const languages = ["Cricket", "VollyBall", "Football", "Tennis", "Boxing", "Archer"
    , "Ufc", "Swimming", "Batminton", "Races"];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chips: []
        }
    }

    onChange = chips => {
        this.setState({chips});
    };

    render() {

        return (
            <div className="App">
                <div className="chipContainer">
                    <Chips
                        placeholder="Please select your favourite sports"
                        value={this.state.chips}
                        onChange={this.onChange}
                        suggestions={languages}
                    />
                </div>
            </div>
        );
    }
}

export default App;
