import Image from "next/image";

export default function Home() {
  return (
    <div className="page">
      <div className="centered profile-page w-[400px] h-[350px] p-[20px] rounded-2xl text-white font-bold">
        <div className="banner rounded-lg w-[100%] h-[100px] mb-[40px]">
          <Image src="/pfp.jpg" alt="Profile Picture" width={70} height={70} className="rounded-full translate-x-[15px] translate-y-[60px]" draggable={false}/>
        </div>
        <div className="rounded-lg px-[10px] py-[5px] textbox mb-[20px]">
          <h1>Hey, I am <span className="text-blue-500">nik</span>! I am a <span className="text-blue-300">developer</span> from <span className="text-blue-300">Germany</span>! I love <span className="text-blue-300">coding</span>, <span className="text-blue-300">gaming</span> and <span className="text-blue-300">meeting friends</span>!</h1>
        </div>
        <div className="rounded-lg px-[10px] py-[5px] textbox">
          <h1 className="text-white">Check out my <a className="text-blue-500" href="https://github.com/nik-lmao" target="_blank">github profile</a>!</h1>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-white opacity-[0.8] font-bold translate-y-[95vh]">Made with ❤️ by <a className="text-blue-500" href="https://github.com/nik-lmao" target="_blank">nik-lmao</a>.</h1>
      </div>
      
    </div>
  );
}
