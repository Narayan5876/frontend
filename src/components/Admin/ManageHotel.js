import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import '../../css/Table.css'
import AdminHeader from '../Admin/AdminHeader'
class ManageHotel extends React.Component{
    DeleteHotel = (id) =>{
        //alert(id)
        axios.delete("http://localhost:4000/hotel/"+id)
        }
    state = {
        mydata : []
        }
       
        componentDidMount(){
        axios.get("http://localhost:4000/hotel").then(res=>{
        console.log(res)
        this.setState({mydata : res.data})
        })
        }
        
    render(){
        const mydata222 = this.state.mydata.map(hlists=>{
            return(
              
         
                <table id="customers">
                  
                  <tr>
    <th>Room Image</th>               
    <th>Hotel Name</th>
    <th>Hotel Type</th>
    <th>Room Available</th>
    <th>Price per Night</th>
    <th>Description</th>
    <th>Phone </th>
    <th>Email</th>
    <th>Address</th>
    
    <th> Action</th>
  </tr>
              
  <tr >
  <img src = {"http://localhost:4000/public/images/" + hlists.Image} style = {{width : "200px" , height: "200px"}}/>
   <td>{hlists.hotelname}</td>
    <td>{hlists.hoteltype}</td>
    <td>{hlists.roomavialable}</td>
    <td>{hlists.pricepernight}</td>
    <td>{hlists.description}</td>
    <td>{hlists.phone}</td>
    <td>{hlists.email}</td>
     <td>{hlists.address}</td>
     

    <td>
<button class ="bt1" onClick = {() => this.DeleteHotel(hlists._id)}>Delete</button>
<NavLink to={"/UpdateRoom/"+hlists._id}>Update</NavLink><br/>
    </td>

  </tr>
           </table>
            
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