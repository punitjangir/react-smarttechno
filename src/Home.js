import React, { Component } from 'react';
import fire from './config/Fire';
import Select from 'react-select'
import DateNew from './components/DatePicker1';
import "react-datepicker/dist/react-datepicker.css";

document.body.style = 'background: ;';

var dataaa = [];
var mapar = [];
var testserc = [];
const areaoptions = [
    { value: 'AGRA ROAD', label: 'AGRA ROAD' },
    { value: 'AJMER ROAD', label: 'AJMER ROAD' },
    { value: 'AJMERI GATE', label: 'AJMERI GATE' },
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

const  assign =  [
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
  const billoptions = [
    { value: 'BILLED', label: '  BILLED' },
    { value: 'NA', label: 'NA' },
    { value: 'NOT TO BE BILLED', label: 'NOT TO BE BILLED' }
  ];

  const newoptions = [
    { value: 'HIGH', label: 'HIGH' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'LOW', label: 'LOW' },
    { value: 'URGENT', label: 'URGENT' }
  ];
 
  
  const payoptions = [
    { value: 'DUE', label: 'DUE' },
    { value: 'NA', label: 'NA' },
    { value: 'OTHER', label: 'OTHER' },
    { value: 'RECIEVED', label: 'RECIEVED' }
  ];
  
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

  const statoptions = [
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
     ree = (selectedOption) => {
         alert(selectedOption.label)
     }
    render() {
      const { selectedOption } = this.state;
  
      return (
        <Select
          onChange={this.handleChange}
          options={statoptions}
          onChange = {this.ree}
          defaultValue = {{ value: 'PENDING', label: 'PENDING' }}
          isClearable
        />
      );
    }
  }

  
  
  
  
  class SelectServ  extends React.Component {
  
    
    state = {
      selectedOption: null,
    }
  
  
    
  
  
  
    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
      testserc = selectedOption
    
    }
  
    
   
  
  
    
   
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value)
      event.preventDefault()
    }
    
    render() {
      
      const { selectedOption } = this.state;
      return (
        <Select
          onChange = {this.handleChange}
          isClearable
         isSearchable
         options = {servoptions}
          isMulti
          
        />
      );
    }
  }

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
          options={payoptions}
          isClearable
          defaultValue = {{ value: 'DUE', label: 'DUE' }}
        />
      );
    }
  }


  class Selectnew  extends React.Component {
  
    
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
          options={newoptions}
          isClearable
        />
      );
    }
  }

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
          options={areaoptions}
          isClearable
        />
      );
    }
  }


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
          options={billoptions}
          defaultValue = {{ value: 'NA', label: 'NA' }}
          isClearable
  
        />
      );
    }
  }
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
          options={assign}
          isMulti
          isClearable
        />
      );
    }
  }


class Home extends Component {

    valuesT = () => {
        
         

        alert('home val : ' +testserc.length);
    }
        

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
        
        
    }
    componentDidMount(){
        var ref=fire.auth();

        
ref.onAuthStateChanged(function(authData) {
if (authData) {
  console.log("User " + fire.auth().currentUser.uid + " is logged in ");
  var reff = fire.database().ref('Service Type');

  reff.on('value', function(snapshot){
    var snaps1 = snapshot.val();
   

    
       
        snapshot.forEach(function(childSnapshot){

                dataaa.push(childSnapshot.key);

        });
        dataaa.forEach(function(element) {
            mapar.push({ label:element, value: element })
        });
        console.log(dataaa +"  hii  " + dataaa.length);
   var  parsee = JSON.stringify(mapar);
    // console.log("hiii" +parsee);
        
        

    // console.log(valll);

  });
  reff.on('value', function(snapshot) {
      var changedPost = snapshot.val();

      var arealist  = [];

      // snapshot.forEach()
      snapshot.forEach(ss => {
      arealist.push(snapshot.child('name').val());
   });
    
      

         

      console.log("The updated post title is " );
      
     
    });
} else {
  console.log("User is logged out");

}
});
      
    }
      

    
    logout() {
        fire.auth().signOut();
    }
    state = {
        selectedOption: null,
      }
      handleChange = (event) => {     
        if(mapar !== null){
            this.setState({ selectedEvent : event.value })
        } else {
            this.setState({ selectedEvent: null })
        }
    }

   
  
    
    
    render (){
        
        
       const {rt1} = this.state;
       

        return(
            
            <div class = "col-md-12" style = {{backgroundColor : "#777474"}} >
            
            
            
            
            
            
            <h1 class = "alert alert-info " style = {{textAlign : "center"}}>Smart Techno<button class = "pull-right btn btn-dark"  onClick = {this.logout}>Logout</button></h1>
            <div class = "col-md-2" style = {{backgroundColor : "#777474"}}>
            <form >
                
                
            <div class="form-group">
                <label>Name</label>
                <input className='filter-input'  type="text"class="form-control "  placeholder="Enter name "   />
            </div>
            <div class="form-group" > 
                    <label>Date</label>
                    <div class = "form-group" >
                    <DateNew
                     className= "form-control" 
                     todayButton={"Vandaag"} 
                     selected={this.state.date} 
                     
                     onChange={this.handleChange} />
                    </div>
                </div>
            <div class="form-group">
            <label>Mobile Number</label>
                <input   class="form-control"  placeholder="Enter Mobile Numbe" type = "number" /> 
            </div>
         

            {/* area */}

            <div class="form-group">
                <label>Area</label>
                <SelectArea
                
                 />


            

            </div>
            <div class="form-group">
            <label>Address line 1</label>
            <input class = "form-control" placeholder = "Detailed Adress" type = "text" />
            </div>

            {/* service type */}

            <div class="form-group">
                <label>Service Type</label>
            <SelectServ id = "name11"
                
            onChange =     {this.valuesT}
            

            
            />
            
            </div>
            <div class="form-group">
                <label>Service Info</label>
            <input class = "form-control" placeholder = "Service Info" type = "text " />
            </div>

            {/* Assign */}

            <div class="form-group">
                <label>Assign To</label>
                <SelectAssign/>
            </div>
            {/* status */}


            <div class="form-group">
                <label>Payment Status</label>
                <SelectPay

                />
            </div>

            {/* Priority */}

            <div class="form-group">
                <label>Priority</label>
                <Selectnew />
            </div>


            {/* billing */}

         
            <div class="form-group">
                <label>Billing</label>

            <SelectBilling/>
            </div>

            {/* payment status */}


            <div class="form-group">
                <label>Status</label>
                <SelectStat/>
            </div>


             <div class="form-group">
                 <label> Remarks</label>
                 <input class = "form-control" type = "text" placeholder = "Remarks" />
            </div>   
            
                <div class="form-group">
                    <label></label>
                    <label></label>
                    <button class = "form-control"  type = "button"  onClick={this.valuesT}>
                            Submit
                    </button>
                </div>
                <label></label>
            </form> 

           <label></label>
            

            </div>
            

            </div>
        );
    }
    
}
export default Home;


