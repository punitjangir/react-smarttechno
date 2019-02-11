import React, { Component } from 'react';
import Selectnew from './components/SelectNew';
import fire from './config/Fire';
import DateNew from './components/DatePicker1'
import "react-datepicker/dist/react-datepicker.css";

document.body.style = 'background: ;';

var dataaa = [];
var mapar = [];
var ttest = [];




class Home extends Component {

    
        

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
        
        return(
            <div class = "col-md-12" style = {{backgroundColor : "#777474"}} >
            
            
            
            
            
            
            <h1 class = "alert alert-info " style = {{textAlign : "center"}}>Smart Techno<button class = "pull-right btn btn-dark"  onClick = {this.logout}>Logout</button></h1>
            <div class = "col-md-2" style = {{backgroundColor : "#777474"}}>
            <form >
                
                
            <div class="form-group">
                <label>Name</label>
                <input className='filter-input' type="text"class="form-control"  placeholder="Enter name " />
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
                <input  class="form-control"  placeholder="Enter Mobile Numbe" type = "number" /> 
            </div>
            <div class="form-group">
            <label >Area</label>
                <select class="form-control" id = "selecttex">
                    <script>
                    
                    

                    </script>
                </select>
            </div>
            <div class ="form-group">
            <label >Assign To</label>
            <select class="form-control" >
            <option>hii</option>
             <option>hii</option>
             <option>3</option>
                    </select>


            </div>
                
            
                
            </form> 

            <div>
                <label>Select Test</label>

            <Selectnew
        value={this.state}
        onChange={this.handleChange}
        isMulti
        isSearchable
        options={mapar}
        
        
      />
            </div>

            </div>
            

            </div>
        );
    }
}
export default Home;