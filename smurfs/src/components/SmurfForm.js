import React from 'react';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    onNameChange = (event) => {
        this.setState({ 
            name: event.target.value
        })
    }

    onAgeChange = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    onHeightChange = (event) => {
        this.setState({
            height: event.target.value
        })
     };

     onSubmit = () => {
         this.props.saveSmurf(this.state)
     }


    render() {
        return (
            <div>
                <input type="text" placeholder="name" value={this.state.name} onChange={this.onNameChange} />
                <input type="text" placeholder="age" value={this.state.age} onChange={this.onAgeChange} />
                <input type="text" placeholder="height" value={this.state.height} onChange={this.onHeightChange} />
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }
}

export default SmurfForm;