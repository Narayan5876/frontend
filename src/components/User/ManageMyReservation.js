import React from 'react'
import {BrowserRouter, NavLink} from 'react-router-dom'
import axios from 'axios';
import UserHead from './UserHead'


class ManageMyReservation extends React.Component{
    //declaring a variable
    DeleteReservation = (id) =>{
        //alert(id)
        axios.delete("http://localhost:4000/reservation/"+id)
        }
    state = {
        fullname: '',
        email: '',
        phone: '',
        checkin: '',
        checkout:'',
        noofrooms:'',
        noofadult:'',
        children:'',
        roomtype:'',
       
       
        mydata: []
    }
    componentDidMount() {

        axios.get("http://localhost:4000/reservation/single").then(res => {
                console.log(res.data)
                this.setState({
                    fullname: res.data.fullname,
                    email: res.data.email,
                    phone: res.data.address,
                    checkin: res.data.checkin,
                    checkout:res.data.checkout,
                    noofrooms:res.data.noofrooms,
                    noofadult:res.data.noofadult,
                    children:res.data.children,
                    roomtype:res.data.roomtype,

                   
                   
                   
                   
                   

                })

            })
    }
     
    render(){

        const mydata222 = this.state.mydata.map(hlists=>{
            return(
                <div>
                    
              
           <table>
               <tr>
    <th>Full name</th>               
    <th>Email</th>
    <th>phone</th>
    <th>checkin</th>
    <th>Checkout</th>
    <th>noofrooms</th>
    <th>noofAdult</th>
    <th>noofChildren</th>
    <th>Room Type</th>
    <th> Action</th>
  </tr>

  <tr>
 
    <td>{hlists.fullname}</td>
    <td>{hlists.email}</td>
    <td>{hlists.phone}</td>
     <td>{hlists.checkin}</td>

     <td>{hlists.checkout}</td>
     <td>{hlists.noofrooms}</td>
     <td>{hlists.noofadult}</td>
     <td>{hlists.children}</td>
     <td>{hlists.roomtype}</td>


    <td>
<button class ="button" onClick = {() => this.DeleteReservation(hlists._id)}>Delete</button>
<NavLink to={"/UpdateRoom/"+hlists._id}>Update</NavLink><br/>
    </td>

  </tr>
           </table>
           </div>
            
            )
            
             })
        
        
         return(
        <section>
        
        <UserHead/>
        
         {mydata222}
        
        </section>
        )
    }
}
  
  export default ManageMyReservation;
  