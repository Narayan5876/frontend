import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import '../../css/Table.css'
import UserHead from './UserHead'
class ManageHotel extends React.Component{

    state = {
        mydata : []
        }
       
        componentDidMount(){
        axios.get("http://localhost:4000/room").then(res=>{
        console.log(res)
        this.setState({mydata : res.data})
        })
        }
        
    render(){
        const mydata222 = this.state.mydata.map(hlists=>{
            return(
                <div>
                  
                       <img src = {"http://localhost:4000/public/images/" + hlists.Image} style = {{width : "100%" , height: "400px"}}/> 
                       <br/>
                      <li className= "ab">Room Address:{hlists.roomaddress}</li><br/>
                        <li className= "ab">Room Type:{hlists.roomtype}</li><br/>
                        <li className= "ab">Room Status:{hlists.roomavialable}</li><br/>
                        <li className= "ab">price:{hlists.price}</li><br/>
                        <li className= "ab">Description:{hlists.description}</li><br/>
                   <p> <button className="abcd"><NavLink to={"/Reservation/:id"+hlists._id}>Reservation</NavLink></button></p>
                   <br/>

                    
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