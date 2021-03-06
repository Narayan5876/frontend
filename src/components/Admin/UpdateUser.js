import React from 'react'
import axios from 'axios';
import AdminHeader from './AdminHeader'
class UpdateUser extends React.Component{
        state = {
                fullname: '',
                address: '',
                email: '',
                number: '',
                User_data: []
            }
            componentDidMount() {
        
                axios.get("http://localhost:4000/users/single/" + this.props.match.params.id).then(
                    res => {
                        console.log(res.data)
                        this.setState({
                            //teacher_data : res.data,
                            fullname: res.data.fullname,
                            address: res.data.address,
                            email: res.data.email,
                            number: res.data.number,
                           
        
                        })
        
                    })
            }
            UpdateData = () => {
                const data = {
                    fullname: this.state.fullname,
                    address: this.state.address,
                    email: this.state.email,
                    number: this.state.number,
                    
                }
        
                axios.put("http://localhost:4000/user/" + this.props.match.params.id,
                    data)
                 alert("update sucessfully")  
            }
            render() {
 return(
 <div>
         <AdminHeader/>
         <center>
                <form class ="form-body">
                <center> <h1>Please update your profile</h1> </center>

 
 <p>FullName</p>
 <input type="text" value={this.state.fullname}
onChange={(event)=>this.setState({fullname : event.target.value})} />

<p>Email</p>
 <input type="text" value={this.state.email}
onChange={(event)=>this.setState({email: event.target.value})}/>

<p>Address</p>
 <input type="text" value={this.state.address}
onChange={(event)=>this.setState({address: event.target.value})}/>

<p>Contact Number</p>
  <input type="text" value={this.state.number}
onChange={(event)=>this.setState({number: event.target.value})}/>

<p> <button onClick={this.UpdateData}>Update</button></p>
 </form>
 </center>

 </div>
 )
 }
}
export default UpdateUser
