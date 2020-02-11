import React from 'react'
import axios from 'axios';
import UserHead from './UserHead'
class UpdateMyReservation extends React.Component{
        state = {
                fullname: '',
                email: '',
                phone: '',
                checkin:'',
                checkout:'',
                noofrooms:'',
                noofadult:'',
                children:'',
                
                User_data: []
            }
            componentDidMount() {
        
                axios.get("http://localhost:4000/reservation/single/" + this.props.match.params.id).then(
                    res => {
                        console.log(res.data)
                        this.setState({
                            //teacher_data : res.data,
                            fullname: res.data.fullname,
                            email: res.data.email,
                            phone: res.data.phone,
                            query: res.data.query,
                           
        
                        })
        
                    })
            }
            UpdateData = () => {
                const data = {
                    fullname: this.state.fullname,
                   
                    email: this.state.email,
                    phone: this.state.phone,
                    query: this.state.query,
                    
                }
        
                axios.put("http://localhost:4000/reservation/" + this.props.match.params.id,
                    data)
                 alert("update sucessfully")  
            }
            render() {
 return(
 <div>
         <UserHead/>
         <center>
                <form class ="form-body">
                <center> <h1>Please update your profile</h1> </center>

 
 <p>FullName</p>
 <input type="text" value={this.state.fullname}
onChange={(event)=>this.setState({fullname : event.target.value})} />

<p>Email</p>
 <input type="text" value={this.state.email}
onChange={(event)=>this.setState({email: event.target.value})}/>

<p>Contact Number</p>
  <input type="text" value={this.state.phone}
onChange={(event)=>this.setState({phone: event.target.value})}/>
<p>Address</p>
 <input type="text" value={this.state.query}
onChange={(event)=>this.setState({query: event.target.value})}/>

<p> <button onClick={this.UpdateData}>Update</button></p>
 </form>
 </center>

 </div>
 )
 }
}
export default UpdateMyReservation
