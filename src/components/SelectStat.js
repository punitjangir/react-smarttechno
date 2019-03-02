import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'COMPLETED', label: 'COMPLETED' },
  { value: 'IN PROGRESS', label: 'IN PROGRESS' },
  { value: 'PENDING', label: 'PENDING' }
];

class SelectStat  extends React.Component {

  
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
        defaultValue = {{ value: 'PENDING', label: 'PENDING' }}
        isClearable
      />
    );
  }
}
export default SelectStat