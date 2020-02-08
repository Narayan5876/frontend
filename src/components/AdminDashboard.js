import React from 'react'
import axios from 'axios';
import AdminHeader from './AdminHeader'
import '../../css/Adminbody.css'



// import { View, Image } from 'react-native';
class AdminDashBoard extends React.Component{
    
        state = {
                fullname: '',
                email: '',
                address: '',
                number: '',
               
               
                user_data: []
            }
            componentDidMount() {
        
                axios.get("http://localhost:4000/users/single/" + this.props.match.params.id).then(
                    res => {
                        console.log(res.data)
                        this.setState({
                            fullname: res.data.fullname,
                            email: res.data.email,
                            address: res.data.address,
                            number: res.data.number,
                           
                           
                           
                           
                           
        
                        })
        
                    })
            }
            render() {
 return(
 <div>
         <AdminHeader/>
         <center>
                <form class ="form-bodys">
                <center> <h1>welcome to Admin DashBoard</h1> </center>
             
 
 <p>Full Name:{this.state.fullname}</p>
 <p>Email: {this.state.email}</p>
 <p>Address:{this.state.address}</p>

 <p>Contact Number: {this.state.number}</p>

 </form>
 </center>

 </div>
 )
 }
}
export default AdminDashBoard
