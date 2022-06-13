import {useState,createContext} from 'react'
const AuthContext = createContext();

const AuthProvider = ({children})=> {

      //Estados de componentes a mostrar
    const [statusComponent,setStatusComponent] = useState(true);
    const [authUser,setAuthUser] = useState({});
    const [idControl,setidControl] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                statusComponent,
                authUser,
                idControl,
                setStatusComponent,
                setAuthUser,
                setidControl
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export{
    AuthProvider
}

export default AuthContext