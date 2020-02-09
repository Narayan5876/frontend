import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import '../../css/Table.css'
import AdminHeader from './AdminHeader'

class ManageRoom extends React.Component{
    DeleteRoom = (id) =>{
        //alert(id)
        axios.delete("http://localhost:4000/room/"+id)
        }
    state = {
        mydata : []
        }
       
        componentDidMount(){
        axios.get("http://localhost:4000/room").then(res=>{
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
    <th>Room Image</th>               
    <th>Room TYpe</th>
    <th>Address</th>
    <th>Room Status</th>
    <th>Price per Night</th>
    <th>Description</th>
    <th> Action</th>
  </tr>

  <tr>
  <img src = {"http://localhost:4000/public/images/" + hlists.Image} style = {{width : "200px" , height: "200px"}}/>
    <td>{hlists.roomtype}</td>
    <td>{hlists.roomaddress}</td>
    <td>{hlists.roomavialable}</td>
     <td>{hlists.price}</td>
     <td>{hlists.description}</td>

    <td>
<button class ="bt1" onClick = {() => this.DeleteRoom(hlists._id)}>Delete</button>
<button class= "bt2" > <NavLink to={"/UpdateRoom/"+hlists._id}>Update</NavLink> </button>
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
export default ManageRoom