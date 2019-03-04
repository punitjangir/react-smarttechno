import React from 'react';
import Select from 'react-select';

const servoptions = [
  { value: 'CCTV BILLING', label: 'CCTV BILLING' },
  { value: 'CAMERA INSTALLATION', label: 'CAMERA INSTALLATION' },
  { value: 'CAMERA SERVICE', label: 'CAMERA SERVCIE' },
  { value: 'COMPUTER SERVICE', label: 'COMPUTER SERVICE' },
  { value: 'COMPUTER SERVICE', label: 'COMPUTER SERVICE' },
  { value: 'COMPUTER UPGRADATION', label: 'COMPUTER UPGRADATION' },
  { value: 'DVR ONLINE', label: 'DVR ONLINE' },
  { value: 'DATA RECOVERY', label: 'DATA RECOVERY' },
  { value: 'INVOICE DELIVERY', label: 'INVOICE DELIVERY' },
  { value: 'LAN WIRING', label: 'LAN WIRING' },
  { value: 'LAPTOP REPAIRING', label: 'LAPTOP REPAIRING' },
  { value: 'BILLED', label: 'LAPTOP SERVICE' },
  { value: 'MEETING', label: 'MEETING' },
  { value: 'NETWORKING ISSUE', label: 'NETWORKING ISSUE' },
  { value: 'NOT SPECIFIED', label: 'NOT SPECIFIED' },
  { value: 'OTHER REPAIR AND SERVICES', label: 'OTHER REPAIR AND SERVICES' },
  { value: 'PAYMENT COLLECTION', label: 'PAYMENT COLLECTION' },
  { value: 'PRODUCT DELIVERY', label: 'PRODUCT DELIVERY' },
  { value: 'PRODUCT PICKUP', label: 'PRODUCT PICKUP' },
  { value: 'SERVICE CENTER WORK', label: 'SERVICE CENTER WORK'},
  { value: 'SITE VISIT', label: 'SITE VISIT'}
];




class SelectServ  extends React.Component {

  
  state = {
    selectedOption: null,
  }


  



  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  
  }

  
 


  
 
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value)
    event.preventDefault()
  }
  
  render() {
    
    const { selectedOption } = this.state;
    return (
      <Select
        onChange = {selectedOption}
        isClearable
       isSearchable
       options = {servoptions}
        isMulti
        
      />
    );
  }
}
export default SelectServ