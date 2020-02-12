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
        axios.get("http://localhost:4000/hotel").then(res=>{
        console.log(res)
        this.setState({mydata : res.data})
        })
        }
        
    render(){
        const mydata222 = this.state.mydata.map(hlists=>{
            return(
                <div>
                 
                  <img src = {"http://localhost:4000/public/images/" + hlists.Image} style = {{width : "100%" , height: "500px"}}/> 
                       <br/>
                      <li className= "ab">Hotel Name:{hlists.hotelname}</li><br/>
                        <li className= "ab">Hotel Type:{hlists.hoteltype}</li><br/>
                        <li className= "ab">Room Available:{hlists.roomavialable}</li><br/>
                        <li className= "ab">pricepernight:{hlists.pricepernight}</li><br/>
                        <li className= "ab">Descriptionn:{hlists.description}</li><br/>
                        <li className= "ab">phone:{hlists.phone}</li><br/>
                        <li className= "ab">Email:{hlists.email}</li><br/>
                       <li className= "ab">Address:{hlists.address}</li><br/>
                 <p>  <button className="abcd"> <NavLink to={"/addquery/"+hlists._id}>Query</NavLink></button> </p>
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