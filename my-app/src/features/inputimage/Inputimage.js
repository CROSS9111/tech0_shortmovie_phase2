import React, { useState } from 'react';


const Inputimage = ({setNewValue, setTrigar}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        // console.log(e.target.value)
      };

    const handleSubmit = async() => {
        
        const res = await fetch(
            "http://127.0.0.1:8000/adding_tags/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({sending_url: inputValue}),
          });
        const adding_data = await res.json();
        // console.log(adding_data.adding_data)
        setNewValue(adding_data.adding_data)
        setTrigar(adding_data)
        // ここに入力値を処理するロジックを書きます
        // 例えば、サーバーへのアップロードやローカルの状態管理など
        // console.log('Input Submitted: ', inputValue);
    };

  return (
    <div className="flex justify-center items-center my-5 space-x-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="画像のURLを入力してください"
        className="input px-4 py-2 border border-blue-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent flex-1"
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-blue-500 text-white font-bold rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition ease-in-out duration-150 whitespace-nowrap"
      >
        アップロード
      </button>
    </div>
  )
}

export default Inputimage
