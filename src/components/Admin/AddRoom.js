import React from 'react'
import axios from 'axios'
import AdminHeader from './AdminHeader'


class AddRoom extends React.Component{
    constructor() {
        super()
         this.state = {
             roomaddress: '',
             roomtype : '',
             room:'',
             price: '',
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
      
    
    addroom = (e) => {
        e.preventDefault();
      //
      

      let postdata = new FormData();
      postdata.append('roomaddress', this.state.roomaddress);
      postdata.append('roomtype', this.state.roomtype);
      postdata.append('room', this.state. room);
      postdata.append('price', this.state.price);
      postdata.append('description', this.state.description);
      

      
      postdata.append('Img', this.state.Image);
    
      postdata.append('Image', this.state.Image.name);
      

      
      console.log(this.state.Image.name);
    
        axios.post('http://localhost:4000/room',postdata, this.state.config)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token)
                //alert("room added successfully")
                this.setState({
                //this values should match with the value of model class of API
                //install cors in api
                roomaddress:this.state.roomaddress,
                roomtype:this.state.roomtype,
                room:this.state.room,
                price:this.state. price,
                description:this.state.description,
                Image:this.state.Image

            });
            
            
            
        }).catch((err) => console.log(err))
    }

    render(){
       
        return(
            
            <div>
                 <AdminHeader/>
                <center>
                <form class ="form-body">
                <center> <h1>Add Hotel</h1> </center>

                <p class ="para">Room Type</p>
                <input type="text" name="roomtype" placeholder="Enter Room Type"  onChange={this.handleChange} required/>

                <p class ="para">Address</p>
                <input type="text" name="roomaddress" placeholder="Enter Room Address"  onChange={this.handleChange} required/>

                <p class ="para">RoomStatus</p>
       
                <input type="text" name="room" placeholder="Enter Room Status"  onChange={this.handleChange} required/>
                
                   
                    
                <p class ="para">Price/Night</p>
                <input type="text" name="price" placeholder="Enter price"  onChange={this.handleChange} required/>

                <p class ="para">Description</p>
                <textarea name="description" rows="4" cols="50"  onChange={this.handleChange}>  </textarea>

                <p class ="para">Image</p>
                <input type="file" name="Image" placeholder="choose image" onChange={this.handleImageChange} required/>

                <p><button class ="abc" onClick={this.Login} type="submit" onClick={this.addroom}>Add Room</button></p>
                </form>
                
                  
                </center>
            </div>

        )
    }
}
export default AddRoom