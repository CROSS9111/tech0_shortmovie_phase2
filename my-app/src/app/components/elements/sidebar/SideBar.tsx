"use client";

import React from 'react';
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="w-full">
      <div className="px-1 flex flex-col">
        {/* サイドバーのコンテンツ */}
        <Link href="http://localhost:3000" className='block p-2 hover:bg-gray-200 hover:underline my-2 ml-2 transition duration-300 ease-in-out font-bold'>
          {/* <a className="btn-natural my-2 ml-2">写真（動画）の登録</a> */}
          思い出の登録
        </Link>
        <Link href="http://localhost:3000/shortmove" className='block p-2 hover:bg-gray-200 hover:underline my-2 ml-2 transition duration-300 ease-in-out font-bold'>
          {/* <a className="btn-natural my-2 ml-2">ショートムービーの作成</a> */}
          ショートムービ作成
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;