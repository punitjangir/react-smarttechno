import React, { Component } from 'react';
import Selectnew from './components/SelectNew';
import fire from './config/Fire';
import DateNew from './components/DatePicker1';
import SelectBilling from './components/SelectBilling'
import "react-datepicker/dist/react-datepicker.css";
import SelectPay from './components/SelectPay';
import SelectAssign from './components/SelectAssign';
import SelectServ from './components/SelectServ';
import SelectArea from './components/SelectArea';
import SelectStat from './components/SelectStat';

document.body.style = 'background: ;';

var dataaa = [];
var mapar = [];
var ttest = [];
var crt  = [];

// function values(){
//     var b = document.getElementById('name');

//     alert(b);
// }
// class buttonTes extends Component {
//     valuesT = () => {
//         console.log('this is : ' , this);
//     }
// }




class Home extends Component {

    valuesT = () => {
        // var b = document.getElementById('name');

        alert('home vale : ' +crt.length);
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
                <input className='filter-input' type="text"class="form-control "  placeholder="Enter name "   />
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
            <SelectServ id = "name"
                
            onChange =     {() => this.setState({crt})}
            onChange = {this.valuesT}
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
                    <button class = "form-control"  type = "button"  onClick={this.props.ercalert}>
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


