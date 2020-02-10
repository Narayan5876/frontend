import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import UserHead from './UserHead'


class AddQuery extends React.Component{
    constructor() {
        super()
         this.state = {
              fullname: '',
              email: '',
             phone: '',
             isRegistered: true
             
         }
     }
         
     handleChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }
     
     AddQuery = (e) => {
         e.preventDefault();
         console.log(this.state);
     
         axios.post('http://localhost:4000/query', this.state)
             .then((response) => {
                 console.log(response.data);
                 localStorage.setItem('token', response.data.token)
                 this.setState({
                 fullname:this.state.fullname,
                 email:this.state.email,
                 phone:this.state.phone,
                 query:this.state.query,
                
             });
             
             
             
         }).catch((err) => console.log(err))
     }
     
         render(){
             
                 
            
             return (
<div>
                    <UserHead/>     
                 <form>
                     
                  <div class="containers">
                 
     
                 <p>Fullname</p>
                 <input type="text" value = {this.state.fullname} onChange = {(event)=> this.setState({fullname:event.target.value})} 
                 placeholder="Enter Fullname" name="fullname" required/>
                 
                 <p>Email</p>
                 <input type="email" value = {this.state.email} onChange = {(event)=> this.setState({email:event.target.value})} 
                 placeholder="Enter email" name="email" required/>

                 <p>Contact Number</p>
                 <input type="text" value = {this.state.phone} onChange = {(event)=> this.setState({phone:event.target.value})} 
                 placeholder="Enter phone number" name="number" required/>
                 
                 <p>Qury</p>
                 <input type="text" value = {this.state.query} onChange = {(event)=> this.setState({query:event.target.value})} 
                 placeholder="Enter email" name="query" required/>
               
                 
                
                 
                 <button className="abc" onClick={this.AddQuery} type="submit">AddQuery</button>
                 
                
                 
                 </div>
     
                 </form>
                 </div>
                 
     
               
     
       
     )
     }
             }

             export default AddQuery