import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'AKRAM QURESHI', label: 'AKRAM QURESHI' },
  { value: 'AMIT SONI', label: 'AMIT SONI' },
  { value: 'AYAAN', label: 'AYAAN' },
  { value: 'DHEERAJ', label: 'DHEERAJ' },
  { value: 'GAURAV LUNIA', label: 'GAURAV LUNIA' },
  { value: 'HITESH SONI', label: 'HITESH SONI' },
  { value: 'INDRAJ SAINI', label: 'INDRAJ SAINI' },
  { value: 'MOHD SHOAIB', label: 'MOHD SHOAIB' },
  { value: 'NAZIM HUSSAIR', label: 'NAZIM HUSSAIR' },
  { value: 'SAKIB ALI', label: 'SAKIB ALI' },
  { value: 'Akram Qureshi', label: 'Akram Qureshi' },
  { value: 'SARFRAZ', label: 'SARFRAZ' },
  { value: 'SHREYANSH JAIN', label: 'SHREYANSH JAIN' },
  {value: 'WASSIM KHAN', label: 'WASSIM KHAN'}
];

class SelectAssign  extends React.Component {
  
  
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
        isMulti
        isClearable
      />
    );
  }
}
export default SelectAssign
