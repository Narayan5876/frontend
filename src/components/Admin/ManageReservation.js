import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import '../../css/Table.css'
import AdminHeader from './AdminHeader'

class ManageHotel extends React.Component{
    DeleteReservation = (id) =>{
        //alert(id)
        axios.delete("http://localhost:4000/reservation/"+id)
        }
    state = {
        mydata : []
        }
       
        componentDidMount(){
        axios.get("http://localhost:4000/reservation").then(res=>{
        console.log(res)
        this.setState({mydata : res.data})
        })
        }
        
    render(){
        const mydata222 = this.state.mydata.map(hlists=>{
            return(
                <div>
               
          
               <table id="customers">
               <tr>
    <th>Full Name</th>
    <th> Email</th>
    <th>Contact Number</th>
    <th>Check IN</th>
    <th>Check Out</th>
    <th>No of room</th>
    <th>Room Type</th>
    <th>No Of Adult</th>
    <th>NO Of Children</th>
    <th> Action</th>
  </tr>

  <tr>
   <td>{hlists.fullname}</td>
   <td>{hlists.email}</td>
   <td>{hlists.phone}</td>
   <td>{hlists.checkin}</td>
   <td>{hlists.checkout}</td>
   <td>{hlists.noofrooms}</td>
   <td>{hlists.roomtype}</td>
   <td>{hlists.noofadult}</td>
   <td>{hlists.children}</td>
    <td>
<button class ="bt1" onClick = {() => this.DeleteReservation(hlists._id)}>Delete</button>
<button class= "bt2" > <NavLink to={"/UpdateReservation/"+hlists._id}>Update</NavLink> </button>

    </td>
  </tr>
           </table>
           </div>
            
            )
            
             })
        
        
         return(
        <section>
        
        <AdminHeader/>
        
         {mydata222}
        
        </section>
        )
    }
}
export default ManageHotel