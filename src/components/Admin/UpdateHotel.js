import React from 'react'
import axios from 'axios';
import AdminHeader from './AdminHeader'
class UpdateHotel extends React.Component{
        state = {
                hotelname: '',
                hoteltype: '',
                pricepernight: '',
                email: '',
                phone:'',
                address:'',
               
                Hotel_data: []
            }
            componentDidMount() {
        
                axios.get("http://localhost:4000/hotel/single/" + this.props.match.params.id).then(
                    res => {
                        console.log(res.data)
                        this.setState({
                            hotelname: res.data.hotelname,
                            hoteltype:res.data.hoteltype,
                            pricepernight:res.data.pricepernight,
                            email: res.data.email,
                            phone: res.data.phone,
                            address: res.data.address,
                           
                           
                           
                           
        
                        })
        
                    })
            }
            UpdateData = () => {
                const data = {
                    hotelname: this.state.hotelname,
                    hoteltype:this.state.hoteltype,
                    pricepernight:this.state.pricepernight,
                    address: this.state.address,
                    email: this.state.email,
                    phone: this.state.phone,
                  
                    
                }
        
                axios.put("http://localhost:4000/hotel/" + this.props.match.params.id,
                    data)
                 alert("update sucessfully")  
            }
            render() {
 return(
 <div>
         <AdminHeader/>
         <center>
                <form class ="form-body">
                <center> <h1>Please update your Hotel</h1> </center>

 
 <p>Hotel Name</p>
 <input type="text" value={this.state.hotelname}
onChange={(event)=>this.setState({hotelname: event.target.value})} />

<p>Hotel Type</p>
 <input type="text" value={this.state.hoteltype}
onChange={(event)=>this.setState({hoteltype: event.target.value})} />

<p>Price/Night</p>
 <input type="text" value={this.state.pricepernight}
onChange={(event)=>this.setState({pricepernight: event.target.value})} />

<p>Email</p>
 <input type="text" value={this.state.email}
onChange={(event)=>this.setState({email: event.target.value})}/>

<p>Address</p>
 <input type="text" value={this.state.address}
onChange={(event)=>this.setState({address: event.target.value})}/>

<p>Contact Number</p>
  <input type="text" value={this.state.phone}
onChange={(event)=>this.setState({phone: event.target.value})}/>



<p> <button onClick={this.UpdateData}>Update</button></p>
 </form>
 </center>

 </div>
 )
 }
}
export default UpdateHotel
