import React from'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import '../../css/AdminHeader.css'
import UserDashboard from './UserDashboard'
import ViewHotel from './ViewHotel'
import ViewRoom from'./ViewRoom'
import ManageMyReservation from '../User/ManageMyReservation'
import Updateprofile from './Updateprofile'
import Logout from '../Admin/Logout'
import MyQuery from './MyQuery'


class Sidenav extends React.Component{
    state = {

        headersdata22: {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        },
        user_id:"/UserDashboard/"+localStorage.getItem('user_id'),
        user_id1:"/ViewHotel/"+localStorage.getItem('user_id'),
        user_id2:"/ViewRoom/"+localStorage.getItem('user_id'),
        user_id3:"/ManageMyReservation/"+localStorage.getItem('user_id'),
        user_id8:"/Updateprofile/"+localStorage.getItem('user_id'),
        user_id9:"/MyQuery/"+localStorage.getItem('user_id'),
       

        

    }
    render(){
        if (this.state.headersdata22.headers.Authorization === "Bearer null") {
            alert('Login! First')
            return <Redirect to='/Login' />
        }
        return(
            <div class="navbar">
            <ul>
                <li>  <NavLink to={ `${this.state.user_id}` }>UserDashboard</NavLink></li>
                <li><NavLink to= { `${this.state.user_id1}` } >View Hotel</NavLink></li>
                <li><NavLink to={ `${this.state.user_id2}` }>View Room</NavLink></li>
                <li><NavLink to={ `${this.state.user_id3}` }>ManageMyReservation</NavLink></li>
                <li><NavLink to={ `${this.state.user_id8}` }>Update profile</NavLink></li>
                <li><NavLink to={ `${this.state.user_id9}` }>MYQuery</NavLink></li>
                <li><NavLink to="/logout" >Logout</NavLink></li>
               
               
            


            </ul>

            <Switch>
                <Route path="/UserDashBoard" exact component={UserDashboard} />
                <Route path="/ViewHotel" exact component={ViewHotel} />
                <Route path="/ViewRoom" exact component={ViewRoom} />
                <Route path="/ManageMyreservation" exact component={ManageMyReservation} />
                <Route path="/Updateprofile" exact component={Updateprofile} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/MyQuery" exact component={MyQuery} />

             

            </Switch>


        </div>
        )
    }

}
export default Sidenav