import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import '../../css/Table.css'
import UserHead from './UserHead'

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
<button class ="button" onClick = {() => this.Deletequery(hlists._id)}>Delete</button>
<NavLink to={"/UpdateQuery/"+hlists._id}>Update</NavLink><br/>
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
export default ManageHotel