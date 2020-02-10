import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import '../../css/Login.css'
import UserHead from './UserHead'



class AddHotel extends React.Component{
    constructor() {
        super()
         this.state = {
             fullname : '',
             email : '',
             phone: '',
             checkin:'',
             checkout:'',
             noofrooms:'',
             noofadult:'',
             children:'',
             roomtype:'',
             isadded: true,




             config: {
                headers: { 
                    'content-type': 'multipart/form-data'
                }
            }




             
             
         }
     }
     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImageChange = (e) => {
        this.setState({
          Image: e.target.files[0]
        })
      };
      
    
    reservation = (e) => {
        e.preventDefault();
      //
      

    //   let postdata = new FormData();
    //   postdata.append('fullname', this.state.fullname);
    //   postdata.append('email', this.state.email);
    //   postdata.append('phone', this.state.phone);
    //   postdata.append('checkin', this.state.checkin);
    //   postdata.append('checkout', this.state.checkout);
    //   postdata.append('noofrooms', this.state.noofrooms);
    //   postdata.append('noofadult', this.state.noofadult);
    //   postdata.append('children', this.state.children);
    //   postdata.append('roomtype', this.state.roomtype);

    
        axios.post('http://localhost:4000/reservation', this.state)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token)
                this.setState({
                //this values should match with the value of model class of API
                //install cors in api
                fullname:this.state.fullname,
                email:this.state.email,
                phone:this.state. phone,
                checkin:this.state. checkin,
                checkout:this.state.checkout,
                noofrooms:this.state.noofrooms,
                noofadult:this.state. noofadult,
                children:this.state.children,
                roomtype:this.state.roomtype

            });
            
            
            
        }).catch((err) => console.log(err))
    }
    render(){
        //if (this.state. isadded === true) {
            // alert("user added successfully")
           // return <Redirect to='../ManageHotel' />
        //}
       
        return(
           <div>
        <UserHead/>
        
                  <div className = "log">
            <div className="containers">
                 


<p>
make your reservation
</p>

<p>FullName</p>
<input type="text" name="fullname" value={this.state.fullname} onChange={(event) => this.setState({ fullname: event.target.value })} class="form-control mb-4" placeholder="phone"></input>

<p>Email</p>
<input type="text" name ="email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} class="form-control mb-4" placeholder="email"></input>

<p>phone</p>
<input type="text" name="phone" value={this.state.phone} onChange={(event) => this.setState({ phone: event.target.value })} class="form-control mb-4" placeholder="phone"></input>

<p>checkin</p>
<input type="date" name="checkin" value={this.state.checkin} onChange={(event) => this.setState({ checkin: event.target.value })} class="form-control mb-4" placeholder="phone"></input>
<p>checkout</p>
<input type="date" name="checkout" value={this.state.checkout} onChange={(event) => this.setState({ checkout: event.target.value })} class="form-control mb-4" placeholder="phone"></input>

<p>No Of Rooms</p>
<input type="text" name="noofrooms" value={this.state.noofrooms} onChange={(event) => this.setState({ noofrooms: event.target.value })} class="form-control mb-4" placeholder="noofroom"></input>

<p>NO Of Adult</p>
<input type="text" name="noofadult" value={this.state.noofadult} onChange={(event) => this.setState({ noofadult: event.target.value })} class="form-control mb-4" placeholder="noofadult"></input>

<p>No Of children</p>
<input type="text" name="children" value={this.state.children} onChange={(event) => this.setState({ children: event.target.value })} class="form-control mb-4" placeholder="children number"></input>

<p>Room Type</p>
<input type="text" name="roomtype"  value={this.state.roomtype} onChange={(event) => this.setState({roomtype: event.target.value })} class="form-control mb-4" placeholder="roomtype"></input>

<button className="abcd" type="submit" onClick={this.reservation}>Reservation</button>

                 </div>

                 
                 </div>


                 </div>


        )
    }
}
export default AddHotel