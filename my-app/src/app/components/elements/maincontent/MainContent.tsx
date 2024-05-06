"use client";


import React, { useState,useEffect } from 'react';
// import RecommendedLearningContent from "@/features/recommendedlearningcontent/RecommendedLearningContent";
// import LearningHistory from "@/features/learninghistory/components/LearningHistory";
// import SimilarColleagues from "@/features/similarcolleagues/components/SimilarColleagues";
// import RecruitingProjects from "@/features/recruitingprojects/components/RecruitingProjects";
// import Summary1 from "@/features/graph/components/Summary1";
// import Summary2 from "@/features/graph/components/Summary2";
// import SoftSkillTags from "@/features/softskilltags/components/SoftSkillTags";
// import ChartRadar from '@/features/graph/components/ChartRadar';
// import ChartBar from '@/features/graph/components/ChartBar';
// import CanWill from '@/features/canwill/conponents/CanWill';
import Displayimage from "@/features/displayimage/Displayimage";
import Inputimage from "@/features/inputimage/Inputimage"


const MainContent = () => {
  const [newValue, setNewValue] = useState([]);
  const [trigar, setTrigar] = useState([]);

  console.log(newValue)
  // useEffect(()=>{
  //   console.log(newValue)
  // },[newValue])


  
  return (
    <div className="flex-1 justify-center">
      {/* メインコンテンツ */}
      <div className="flex-1 my-5 justify-center">
         <Inputimage setNewValue={setNewValue} setTrigar={setTrigar} />
      </div>

      <div className="flex-1 my-5 justify-center">
        <Displayimage newValue = {newValue} trigar={trigar}/>
      </div> 
    </div>  


    
  );
};

export default MainContent;

// <div className="flex-1 justify-center">
//       {/* メインコンテンツ */}
//       <div className="flex-1 my-5 justify-center">
//         <Displayimage />
//       </div>      

//       <div className="flex my-5 justify-center">
        
//         {/* <ChartRadar />
//         <Summary1 /> */}
//       </div>
//         {/* <SoftSkillTags/>
//         <RecommendedLearningContent />
//         <RecruitingProjects />
//         <SimilarColleagues />
//         <LearningHistory /> */}
//       <div className="flex my-5 justify-center  align-items-start">
        
//         {/* <ChartBar />
//         <Summary2 /> */}
//      </div>
//     </div>