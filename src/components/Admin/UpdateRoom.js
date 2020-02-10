import React from 'react'
import axios from 'axios';
import AdminHeader from './AdminHeader'

class UpdateRoom extends React.Component{
        state = {
                roomaddress: '',
                roomtype: '',
                price: '',
                roomavialable: '',
                room_data: []
            }
            componentDidMount() {
        
                axios.get("http://localhost:4000/room/single/" + this.props.match.params.id).then(
                    res => {
                        console.log(res.data)
                        this.setState({
                            roomaddress: res.data.roomaddress,
                            roomtype:res.data.roomtype,
                            price:res.data.price,
                            roomavialable: res.data.roomavialable,
                           
                           
                           
                           
                           
        
                        })
        
                    })
            }
            UpdateData = () => {
                const data = {
                    roomaddress: this.state.roomaddress,
                    roomtype:this.state.roomtype,
                    price:this.state.price,
                    roomavialable: this.state.roomavialable,
                   
                  
                    
                }
        
                axios.put("http://localhost:4000/room/" + this.props.match.params.id,
                    data)
                 alert("update sucessfully")  
            }
            render() {
 return(
 <div>
         <AdminHeader/>
         <center>
                <form class ="form-body">
                <center> <h1>Please update your Room</h1> </center>

 
 <p>Room Address</p>
 <input type="text" value={this.state.roomaddress}
onChange={(event)=>this.setState({roomaddress: event.target.value})} />

<p>Room Type</p>
 <input type="text" value={this.state.roomtype}
onChange={(event)=>this.setState({roomtype: event.target.value})} />

<p>Price/Night</p>
 <input type="text" value={this.state.price}
onChange={(event)=>this.setState({price: event.target.value})} />

<p>Room Status</p>
 <input type="text" value={this.state.roomavialable}
onChange={(event)=>this.setState({roomavialable: event.target.value})}/>

<p> <button onClick={this.UpdateData}>Update</button></p>
 </form>
 </center>

 </div>
 )
 }
}
export default UpdateRoom
