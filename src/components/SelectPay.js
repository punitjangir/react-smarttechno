import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'DUE', label: 'DUE' },
  { value: 'NA', label: 'NA' },
  { value: 'OTHER', label: 'OTHER' },
  { value: 'RECIEVED', label: 'RECIEVED' }
];

class SelectPay  extends React.Component {

  
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        onChange={this.handleChange}
        options={options}
        isClearable
        defaultValue = {{ value: 'DUE', label: 'DUE' }}
      />
    );
  }
}
export default SelectPay
