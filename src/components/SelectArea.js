import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'AGRA ROAD', label: 'AGRA ROAD' },
  { value: 'AJMER ROAD', label: 'AJMER ROAD' },
  { value: 'AGRA ROAD', label: 'AGRA ROAD' },
  { value: 'AMBABARI', label: 'AMBABARI' },
  { value: 'AMER ROAD', label: 'AMER ROAD' },
  { value: 'BAIS GODAM', label: 'BAIS GODAM' },
  { value: 'BAJAJ NAGAR', label: 'BAJAJ NAGAR' },
  { value: 'BANI PARK', label: 'BANI PARK' },
  { value: 'BAPU NAGAR', label: 'BAPU NAGAR' },
  { value: 'BAPU BAZAR', label: 'BAPU BAZAR' },
  { value: 'BARKAT NAGAR', label: 'BARKAT NAGAR' },
  { value:  'BHAWANI SINGH ROAD', label: 'BHAWANI SINGH ROAD' },
  { value: 'BISESWARJI', label: 'BISESWARJI' },
  { value: 'BRAHMAPURI', label: 'BRAHMAPURI' },
  { value: 'CHANDPOL', label: 'CHANDPOL' },
  { value: 'CIVIL LINES', label: 'CIVIL LINES' },
  { value: 'DURGAPURA', label: 'DURGAPURA' },
  { value: 'GANGORI BAZAR', label: 'GANGORI BAZAR' },
  { value: 'GHAT DARWAZA', label: 'GHAT DARWAZA' },
  { value: 'GOPALPURA', label: 'GOPALPURA'},
  { value: 'INDIRA BAZAR', label: 'INDIRA BAZAR'},
  { value: 'JAGATPURA', label: 'JAGATPUTA' },
  { value: 'JALUPURA', label: 'JALUPURA' },
  { value: 'JANATA COLONY', label: 'JANATA COLONY' },
  { value: 'JAWAHAR COLONY', label: 'JAWAHAR COLONY' },
  { value: 'JAWAHAR NEHRU MARG', label: 'JAWAHAR NEHRU MARG' },
  { value: 'JHOTWARA', label: 'JHOTWARA' },
  { value: 'JHOTWARA INDUSTRIAL AREA', label: 'JHOTWARA INDUSTRIAL AREA' },
  { value: 'JOHARI BAZAR', label: 'JOHARI BAZAR' },
  { value: 'JYOTHI NAGAR', label: 'JYOTHI NAGAR' },
  { value: 'KALWAR ROAD', label: 'KALWAR ROAD' },
  { value: 'KARTARPURA', label: 'KARTARPURA' },
  { value: 'MAHESH NAGAR', label: 'MAHESH NAGAR' },
  { value: 'MALVIYA NAGAR', label: 'MALVIYA NAGAR' },
  { value: 'MANSROVER', label: 'MANSROVER' },
  { value: 'MIRZA ISMAIL ROAD', label: 'MIRZA ISMAIL ROAD' },
  { value: 'MOTIDUNGARI MARG', label: 'MOTIDUNGARI MARG' },
  { value: 'NEW COLONY', label: 'NEW COLONY' },
  { value: 'OTHER', label: 'OTHER' },
  { value: 'PINK CITY', label: 'PINK CITY' },
  { value: 'RAJA PARK', label: 'RAJA PARK'},
  { value: 'RAMGANJ', label: 'RAMGANJ' },
  { value: 'SANGANER', label: 'SANGANER' },
  { value: 'SANSAR CHAND ROAD', label: 'SANSAR CHAND ROAD' },
  { value: 'SETHI COLONY', label: 'SETHI COLONY' },
  { value: 'SHASTRI COLONY', label: 'SHASTRI COLONY' },
  { value: 'SHYAM NAGAR', label: 'SHYAM NAGAR' },
  { value: 'SIKAR ROAD', label: 'SIKAR ROAD' },
  { value: 'SINDHI CAMP', label: 'SINDHI CAMP' },
  { value: 'SIRSI ROAD', label: 'SIRSI ROAD' },
  { value: 'SITAPURA INDUSTRIAL AREA', label: 'SITAPURA INDUSTRIAL AREA' },
  { value: 'SODALA', label: 'SODALA' },
  { value: 'SUBASH NAGAR', label: 'SUBASH NAGAR' },
  { value: 'SUDHARSHANPURA INDUSTRIAL AREA', label: 'SUDHARSHANPURA INDUSTRIAL AREA' },
  { value: 'SURAJPOL BAZAR', label: 'SURAJPOL BAZAR' },
  { value: 'TILAK NAGAR', label: 'TILAK NAGAR' },
  { value: 'TONK PHATAK', label: 'TONK PHATAK' },
  { value: 'TONK ROAD', label: 'TONK ROAD' },
  { value: 'TRANSPORT NAGAR', label: 'TRANSPORT NAGAR' },
  { value: 'VAISHALI NAGAR', label: 'VAISHALI NAGAR' },
  { value: 'VIDHTADHAR NAGAR', label: 'VIDHYADHAR NAGAR'},
  { value: 'VISHWAKARMA INDUSTRIAL AREA', label: 'VISHWAKARMA INDUSTRIAL AREA'},
  { value: 'WALKIN', label: 'WALKIN'}
];

class SelectArea  extends React.Component {

  
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
      />
    );
  }
}
export default SelectArea