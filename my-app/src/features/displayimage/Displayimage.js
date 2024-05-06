import React,{useState,useEffect} from 'react'
import Showimage from "@/features/showimage/Showimage"

const Displayimage = ({newValue,trigar}) => {
  const [displayvalue, setDisplayvalue] = useState([]);
  // const images = [
  //     [1,"https://cdn.pixabay.com/photo/2018/06/22/08/24/emotions-3490223_1280.jpg","'boat', 'silhouette', 'sunset', 'water', 'reflection', 'orange sky', 'gondola', 'venetian boat', 'person', 'rower', 'calm waters', 'tranquil scene', 'cloudy sky', 'evening', 'majestic', 'traditional boat', 'serene'"],
  //     [2,"https://cdn.pixabay.com/photo/2018/01/31/09/42/people-3120717_1280.jpg","baby hand,parent hand,family,care,tenderness,protection,generations,love,trust,connection,childhood,infant,adult,close-up,human connection"],
  //     [3,"https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_1280.jpg", "child,bubbles,play,park,outdoor,daytime,casual clothing,fun,innocence,leisure activity,soap bubbles,blowing,concentration,holding,vest,standing,partially visible face,autumn,forest path,backlight,sunlight,shiny,floating,motion,joy,happiness,activity,clear sky,woods,nature"],
  //     [4,"https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_1280.jpg", "youth soccer,sports field,green jersey,orange soccer ball,artificial turf,sportswear,team practice,athletic activity,goalpost background,outdoor exercise"],
  //     [5,"https://cdn.pixabay.com/photo/2017/06/26/19/53/team-2444978_1280.jpg", "children,soccer,yellow jerseys,huddle,teamwork,coach,outdoors,sports,football pitch,daytime,grass field"],
  //     [6,"https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_1280.jpg", "narrow alleyway,lanterns,hanging signs,Japanese text,evening ambiance,vending machines,dining establishments,autumn leaves,power lines,urban scene"],
  // ]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/");
        const data = await res.json();  // レスポンスを JSON 形式でパース
        // console.log(data.data[0][1]);  // デバッグ情報としてコンソールに出力
        setDisplayvalue(data.data)        
      } catch (error) {
        console.error("Failed to fetch data:", error);  // エラー情報をコンソールに出力
      }
    };

    fetchData();  // 非同期関数を呼び出し
  }, []);

  useEffect(() => {
    console.log("test")
    console.log(newValue)
    if(displayvalue){
      setDisplayvalue(newValue)
    }
  },[trigar])

  return (
    // 画像を表示するためのグリッドレイアウトを作成
    
    <div className="mh-screen p-10">
      <div className="grid max-w-7xl place-items-center gap-5 lg:grid-cols-3 xl:grid-cols-3">
        
        {/* Card */}
        <Showimage images={displayvalue}/>
      </div>
    </div>
    
    
  )
}

export default Displayimage

