import React from'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import '../../css/AdminHeader.css'
import AdminDashboard from './AdminDashboard'
import AddHotel from './AddHotel'
import AddRoom from'./AddRoom'
import ManageUser from './ManageUser'
import ManageHotel from './ManageHotel'
import ManageRoom from './ManageRoom'
import ManageReservation from './ManageReservation'
import ManageQuery from './ManageQuery'
import UpdateUser from './UpdateUser'
import Logout from './Logout'


class Sidenav extends React.Component{
    state = {

        headersdata22: {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        },
        user_id:"/AdminDashboard/"+localStorage.getItem('user_id'),
        user_id1:"/AddHotel/"+localStorage.getItem('user_id'),
        user_id2:"/AddRoom/"+localStorage.getItem('user_id'),
        user_id3:"/ManageUser/"+localStorage.getItem('user_id'),
        user_id7:"/ManageQuery/"+localStorage.getItem('user_id'),
        user_id4:"/ManageRoom/"+localStorage.getItem('user_id'),
        user_id5:"/ManageHotel/"+localStorage.getItem('user_id'),
        user_id6:"/ManageReservation/"+localStorage.getItem('user_id'),
        user_id8:"/UpdateUser/"+localStorage.getItem('user_id'),
       

        

    }
    render(){
        if (this.state.headersdata22.headers.Authorization === "Bearer null") {
            alert('Login! First')
            return <Redirect to='/Login' />
        }
        return(
            <div class="navbar">
            <ul>
                <li>  <NavLink to={ `${this.state.user_id}` }>AdminDashboard</NavLink></li>
                <li><NavLink to= { `${this.state.user_id1}` } >Add Hotel</NavLink></li>
                <li><NavLink to={ `${this.state.user_id2}` }>Add Room</NavLink></li>
                <li><NavLink to={ `${this.state.user_id3}` }>ManageUser</NavLink></li>
                <li><NavLink to={ `${this.state.user_id4}` }>ManageRoom</NavLink></li>
                <li><NavLink to={ `${this.state.user_id5}` }>Manage Hotel</NavLink></li>
                <li><NavLink to={ `${this.state.user_id6}` } >Manage Reservation</NavLink></li>
                <li><NavLink to={ `${this.state.user_id7}` }>Manage Query</NavLink></li>
                <li><NavLink to={ `${this.state.user_id8}` }>Update User</NavLink></li>
                <li><NavLink to="/logout" >Logout</NavLink></li>
               
               
            


            </ul>

            <Switch>
                <Route path="/AdminDashBoard" exact component={AdminDashboard} />
                <Route path="/AddHotel" exact component={AddHotel} />
                <Route path="/AddRoom" exact component={AddRoom} />
                <Route path="/ManageUser" exact component={ManageUser} />
                <Route path="/ManageRoom" exact component={ManageRoom} />
                <Route path="/ManageHotel" exact component={ManageHotel} />
                <Route path="/ManageReservation" exact component={ManageReservation} />
                <Route path="/ManageQuery" exact component={ManageQuery} />
                <Route path="/UpdateUser" exact component={UpdateUser} />
                <Route path="/logout" exact component={Logout} />
             

            </Switch>


        </div>
        )
    }

}
export default Sidenav