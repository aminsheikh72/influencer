import { Outlet } from "react-router-dom"
import Sidebar from "./SideBar"


const AdminLayout = () => {
  return (
    <div className="flex" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
      <Sidebar /> {/* Always visible */}
      <div className="flex-1 p-4 md:p-8">
        <Outlet /> {/* Changes based on route */}
      </div>
    </div>
  )
}

export default AdminLayout
