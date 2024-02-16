"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";



export default function Home() {
  const [ discordStatus, setDiscordStatus ] = useState("offline");

  function getUserStatus(){
    fetch("https://api.lanyard.rest/v1/users/969253860508061737")
      .then((res) => res.json())
      .then((data) => {
        if(data["data"]["success"] == false){
          setDiscordStatus("offline")
        }
        else {
          setDiscordStatus(data["data"]["discord_status"])
        }
        return
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getUserStatus();
    setInterval(getUserStatus, 20000);
  }, []);

  return (
    <div className="page">
      <div className="mainPage">
        <div className="centered profile-page w-[400px] h-[350px] p-[20px] rounded-2xl text-white font-bold">
          <div className="banner rounded-lg w-[100%] h-[100px] mb-[50px] border-[3px] border-black">
            <div>
              <Image src="/pfp.jpg" alt="Profile Picture" width={70} height={70} className="rounded-full translate-x-[15px] translate-y-[60px] border-[3px] border-gray-900" draggable={false}/>
              <span className={`${discordStatus == "online" ? "bg-green-500" : (discordStatus == "idle" ? "bg-yellow-500" : (discordStatus == "dnd" ? "bg-red-500" : (discordStatus == "offline" ? "bg-gray-500" : "bg-red-500")))} h-[20px] w-[20px] rounded-full block translate-x-[62px] translate-y-[42px] border-gray-900 border-[3px]`}></span>
              {/* Please ignore my nice status system ;-;*/}
            </div>
          </div>
          <div>
            <div className="p-0 rounded-lg px-[10px] py-[5px] textbox mb-[20px] border-black border-[2px] hover:scale-[1.03] transition-all">
              <h1>Hey, I am <span className="text-blue-500">nik</span>! I am a <span className="text-blue-300">developer</span> from <span className="text-blue-300 ">Germany</span>! I love <span className="text-blue-300 ">coding</span>, <span className="text-blue-300 ">gaming</span> and <span className="text-blue-300 ">meeting friends</span>!</h1>
            </div>
            <div className="rounded-lg px-[10px] py-[5px] textbox border-black border-[2px] hover:scale-[1.03] transition-all">
              <h1>Check out my <a className="text-blue-500 " href="https://github.com/nik-lmao" target="_blank">github profile</a>!</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden centered text-center smallScreenAlert">
        <h1 className="text-white text-xl white-shadow"><span className="text-blue-500 blue-shadow ">Sorry</span>, this page is only available for users with a screen width of <span className="text-blue-500 blue-shadow ">410 pixels and more</span>.</h1>
      </div>    
    </div>
  );
}
