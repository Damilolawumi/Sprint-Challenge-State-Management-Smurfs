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

    onNameChange = () => { }

    onAgeChange = () => {}

    onHeightChange = () => {}
    

    render() { 
        return ( 
            <div>
                <input type="text" placeholder="name" value={this.state.name} onChange={onNameChange} />
                <input type="text" placeholder="age" value={this.state.age} onChange={onAgeChange}/>
                <input type="text" placeholder="height" value={this.state.height} onChange={onHeightChange}/>
                <button>Submit</button>
            </div>
         );
    }
}
 
export default SmurfForm;