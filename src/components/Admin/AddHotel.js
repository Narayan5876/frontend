import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

import AdminHeader from './AdminHeader'
import '../../css/Adminbody.css'



class AddHotel extends React.Component{
    constructor() {
        super()
         this.state = {
             hotelname : '',
             hoteltype : '',
             roomavialable: '',
             phone: '',
             address:'',
             email:'',
             pricepernight: '',
             description:'',
             Image:'',
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
      
    
    addhotel = (e) => {
        e.preventDefault();
      //
      

      let postdata = new FormData();
      postdata.append('hotelname', this.state.hotelname);
      postdata.append('hoteltype', this.state.hoteltype);
      postdata.append('roomavialable', this.state.roomavialable);
      postdata.append('phone', this.state.phone);
      postdata.append('address', this.state.address);
      postdata.append('email', this.state.email);
      postdata.append('pricepernight', this.state.pricepernight);
      postdata.append('description', this.state.description);

      
      postdata.append('Img', this.state.Image);
    
      postdata.append('Image', this.state.Image.name);
      

      
      console.log(this.state.Image.name);
    
        axios.post('http://localhost:4000/hotel',postdata, this.state.config)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token)
                this.setState({
                //this values should match with the value of model class of API
                //install cors in api
                hotelname:this.state.hotelname,
                hoteltype:this.state.hoteltype,
                roomavialable:this.state. roomavialable,
                phone:this.state. phone,
                address:this.state.address,
                email:this.state.email,
                pricepernight:this.state. pricepernight,
                description:this.state.description,
                Image:this.state.Image

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
                 <AdminHeader/>

                <center>
                <form class ="form-body">
                <center> <h1>Add Hotel</h1> </center>

                <p class ="para">Hotel Name</p>
                <input type="text" name="hotelname" placeholder="Enter Hotel Name" onChange={this.handleChange} required/>

                <p class ="para">Hotel Type</p>
                <input type="text" name="hoteltype" placeholder="Enter hotel Type" onChange={this.handleChange} required/>

                <p class ="para">RoomAvailable</p>
                <input type="text" name="roomavialable" placeholder="Enter number" onChange={this.handleChange}  required/>

                <p class ="para">Contact Number</p>
                <input type="text" name="phone" placeholder="Enter number" onChange={this.handleChange} required/>

                <p class ="para">Address</p>
                <input type="text" name="address" placeholder="Enter Address" onChange={this.handleChange} required/>

                <p class ="para">Email</p>
                <input type="text" name="email" placeholder="Enter Email" onChange={this.handleChange} required/>

                <p class ="para">Price/Night</p>
                <input type="text" name="pricepernight" placeholder="Enter price" onChange={this.handleChange} required/>

                <p class ="para">Description</p>
                <textarea name= "description" rows="4" cols="50" onChange={this.handleChange}></textarea>

                <p class ="para">Image</p>
                <input type="file" name="Image" placeholder="choose image" onChange={this.handleImageChange}  required/>


                <p><button class ="abc" onClick={this.addhotel} type="submit">Add Hotel</button></p>
                </form>
                
                  
                </center>
            </div>

        )
    }
}
export default AddHotel