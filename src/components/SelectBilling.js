import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'BILLED', label: '  BILLED' },
  { value: 'NA', label: 'NA' },
  { value: 'NOT TO BE BILLED', label: 'NOT TO BE BILLED' }
];

class SelectBilling  extends React.Component {

  
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
        defaultValue = {{ value: 'NA', label: 'NA' }}
        isClearable

      />
    );
  }
}
export default SelectBilling