"use client";

import React, { useState, useEffect } from "react";
// import { useAppContext } from "@/context/AppContext"; 
// import Avatar from '@mui/material/Avatar';



const Header = () => {
  // const { userState } = useAppContext();
  const [displayName, setDisplayName] = useState('Kurosu');
  const [initials, setInitials] = useState('');
  const [isOnline, setIsOnline] = useState(false);

  // console.log("UserState:", userState);

  // //ログインユーザー名を表示　※うまく表示を維持できず苦戦
  // useEffect(() => {
  //   if (userState.isLoggedIn) {
  //       setDisplayName(`${userState.lastname} ${userState.firstname}`);
  //       setIsOnline(true);
  //   } else {
  //       setDisplayName('ゲスト');
  //       setIsOnline(false); 
  //       setInitials('?')
  //   }
  // }, [userState.isLoggedIn]);


  // displayName が変更されたらイニシャルを再計算
    useEffect(() => {
      setInitials(getInitials(displayName));
    }, [displayName]);


  //avatarのイニシャル生成
  const getInitials = (displayName) => {
    const names = displayName.split(" ");
    return names.map((name) => name[0]).join("");
  };


    return (
      <div
        className="header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "60px",
          width: "100%",
          display: "flex",
          alignItems: "center", 
          justifyContent: "space-between",
          backgroundColor: "var(--sub6)", 
          zIndex: 1 ,
        }}
      >

      <div className="dropdown dropdown-end flex">
          <div className="flex-none">
            <button 
              className="btn btn-square btn-ghost mx-4 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
      </div>





      <div className="flex justify-end">
        <div className="Login_username" style={{ display: 'flex', alignItems: 'center', fontSize: '12pt', fontWeight: 'bold', padding : '30px' }}>
          Hello!  {displayName}  さん
        </div>
      </div>


      {/* <div className="dropdown dropdown-end flex">
        <div 
          tabIndex={0} 
          role="button" 
          className={`btn btn-ghost btn-circle avatar mx-6 rounded-full ${isOnline ? 'online' : 'offline'}`}
      >
        <div className={`avatar placeholder`}>
          {userState.isLoggedIn ? (
            <div className={`bg-neutral text-neutral-content rounded-full w-10 ${isOnline ? 'online' : 'offline'}`}>
              <span className="text-md">{initials}</span>
            </div>
          ) : (
            <Avatar src="/broken-image.jpg" />
          )}
        </div> 
      </div>

      <ul
        tabIndex={0}
        className="mt-16 z-[1] p-2 mx-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 my-4"
      >
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
      </div> */}
    </div>

    );
  };
  
  export default Header;