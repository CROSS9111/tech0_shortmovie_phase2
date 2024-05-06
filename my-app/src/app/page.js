import Image from "next/image";
import Sidebar from "./components/elements/sidebar/SideBar";
import MainContent from "./components/elements/maincontent/MainContent";

export default function Home() {
  return (
    <div className="flex h-screen" style={{backgroundColor:"var(--sub6)"}}>
          <div className="w-1/6 mt-20 overflow-y-auto"><Sidebar /></div>
          <div className="w-5/6 mt-20 ml-20 mr-20"><MainContent /></div>
      </div>
  );
}
