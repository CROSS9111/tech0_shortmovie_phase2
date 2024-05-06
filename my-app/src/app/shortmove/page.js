import React from 'react'
import Sidebar from "../components/elements/sidebar/SideBar";
import SubContent from "../components/elements/subcontent/SubContent"

const page = () => {
  return (
    <div>
      <div className="flex h-screen" style={{backgroundColor:"var(--sub6)"}}>
          <div className="w-1/6 mt-20 overflow-y-auto"><Sidebar /></div>
          <div className="w-5/6 mt-20 ml-20 mr-20"><SubContent /></div>
      </div>
    </div>
  )
}

export default page
