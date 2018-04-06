import React, { Component } from 'react';
import './SwitchButton.css';

class SwitchButton extends Component {
  constructor() {
    super();
    this.state = {
      checked: true
    }
  }

  handleChange = () => {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return (
      <div className="toggle">
        <input checked={ this.state.checked } 
               onChange={this.handleChange}
               type="checkbox" 
               id="toggle" />
        <label htmlFor="toggle">
          <p>
            {
              this.state.checked 
              ? "Questions are on"
              : "Questions are off"
            }
          </p>
        </label>
      </div>
    )
  }
}  

export default SwitchButton; 