import Sidebar from "../UI/Sidebar"
import Barra from "../UI/Barra"

const Layout = ({children}) => {
  return (
      <div className="row">
            <div className="col-md-3 vh-100 ">
                <Sidebar/>
            </div>
            <div className="col-9 ">
                <Barra/>
                {children}
            </div>
      </div>
  )
}

export default Layout