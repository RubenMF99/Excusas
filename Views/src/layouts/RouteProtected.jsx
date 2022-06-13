import {Outlet,Navigate} from 'react-router-dom'
import  useAuth from '../hooks/useAuth';

const  RouteProtected = ()=> {
    const {authUser} = useAuth();
    return (
        <>
            {authUser.codigo ?<Outlet/>:<Navigate to="/"/>}
        </>
    )
}

export default RouteProtected