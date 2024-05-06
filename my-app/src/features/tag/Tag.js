import React from 'react'

const Tag = ({tags}) => {
    // 文字列を配列に変換し、カンマで分割します
    const tagList = tags.split(",").map(tag => tag.trim());

  return (
    <>
       {tagList.slice(0, 3).map((tag, index) => (
            <a key={index} className="rounded-md bg-gray-200 py-1 px-2 text-xs font-light text-gray-500">
                    {tag}
            </a>
        ))}
    </>
  )
}

export default Tag
