import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import '../../css/Table.css'
import AdminHeader from './AdminHeader'

class ManageHotel extends React.Component{
    Deletequery = (id) =>{
        //alert(id)
        axios.delete("http://localhost:4000/query/"+id)
        }
    state = {
        mydata : []
        }
       
        componentDidMount(){
        axios.get("http://localhost:4000/query").then(res=>{
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
    <th>query</th>
    <th> Action</th>
  </tr>

  <tr>
   <td>{hlists.fullname}</td>
   <td>{hlists.email}</td>
   <td>{hlists.phone}</td>
   <td>{hlists.query}</td>
    <td>
<button class ="bt1" onClick = {() => this.Deletequery(hlists._id)}>Delete</button>

<button class= "bt2" > <NavLink to={"/Updatequery/"+hlists._id}>Update</NavLink> </button>
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