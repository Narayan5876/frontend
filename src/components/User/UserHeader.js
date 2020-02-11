import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from '../Register'
import Login from '../Login'

import '../../css/AdminHeader.css'
import UserDashboard from './UserDashboard'
import AdminHeader from '../Admin/AdminHeader'
import UpdateUser from '../Admin/UpdateUser'
import UpdateProfile from '../User/Updateprofile'
import AdminDashboard from '../Admin/AdminDashboard'
import ManageUser from '../Admin/ManageUser'
import ManageRoom from '../Admin/ManageRoom'
import ManageHotel from '../Admin/ManageHotel'
import ManageQuery from '../Admin/ManageQuery'
import ManageReservation from '../Admin/ManageReservation'
import AddHotel from '../Admin/AddHotel'
import AddRoom from '../Admin/AddRoom'
import UpdateSingleUser from '../User/UpdateSingleUser'
import LogOut from '../Admin/Logout'
import UpdateRoom from '../Admin/UpdateRoom'
import ManageMyReservation  from '../User/ManageMyReservation'
import ManageMyQuery  from '../User/ManageMyQuery'
import UpdateHotel from '../Admin/UpdateHotel'
import UserHead from '../User/UserHead'
import Reservation from '../User/Reservation'
import UpdateMyReservation from './UpdateMyReservation'
import ViewHotel from './ViewHotel'
import ViewRoom from './ViewRoom'
import AddQuery from './AddQuery'
import MyQuery from './MyQuery'




class UserHeader extends React.Component {
    render() {
        return (
            <div class="navbar">
                <Switch>
                    
                    <Route path="/" exact component={Login} />
                    
                     <Route path="/Login" exact component={Login} />
                    <Route path="/Register" exact component={Register} />
                    <Route path ="/MyQuery/:id" exact component={MyQuery}/>
                    <Route path ="/addquery/:id" exact component={AddQuery}/>
                    <Route path="/UserDashboard/:id" exact component={UserDashboard} />
                    <Route path="/Admin/AdminHeader/" exact component={AdminHeader} />
                    <Route path="/updateprofile/:id" exact component={UpdateProfile}/>
                    <Route path="/AdminDashboard/:id" exact component={AdminDashboard} />
                    <Route path="/ManageUser/:id" exact component={ManageUser} />
                    <Route path="/UpdateUser/:id" exact component={UpdateUser} />
                    <Route path="/ManageRoom/:id" exact component={ManageRoom} />
                    <Route path="/ManageHotel/:id" exact component={ManageHotel} />
                    <Route path="/ManageReservation/:id" exact component={ManageReservation} />
                    <Route path="/ManageQuery/:id" exact component={ManageQuery} />
                    <Route path="/AddRoom/:id" exact component={AddRoom} />
                    <Route path="/AddHotel/:id" exact component={AddHotel} />
                    <Route path="/UpdateHotel/:id" exact component={UpdateHotel} />
                    <Route path="/UpdateRoom/:id" exact component={UpdateRoom} />
                    <Route path="/updatesingleuser/:id" exact component={UpdateSingleUser} />
                    <Route path="/Logout" exact component={LogOut} />
                    <Route path="/User/UserHead" exact component={UserHead} />
                    <Route path="/Reservation/:id" exact component={Reservation} />
                    <Route path="/UpdateMyReservation/:id" exact component={UpdateMyReservation} />
                    <Route path="/ManageMyQuery:id" exact component={ManageMyQuery} />
                    <Route path="/ManageMyReservation/:id" exact component={ManageMyReservation} />
                    <Route path="/ViewHotel/:id" exact component={ViewHotel} />
                    <Route path="/ViewRoom/:id" exact component={ViewRoom} />

                   
                    
                    
                    
                   
                </Switch>

            </div>


        )
    }


}
export default UserHeader