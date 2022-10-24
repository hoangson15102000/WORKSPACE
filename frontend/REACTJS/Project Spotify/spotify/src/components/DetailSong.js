
import React from "react"
function DetailSong() {
    return (<div className='col-span-1 p-3'>
        <h2 className="text-[#38bdf8] font-bold">Now Playing</h2>
        <h2 className="text-2xl text-neutral-400 font-normal
        ">Sing me to sleep</h2>

        <div className='w-[256px] m-auto mt-10'>
            <img className='w-full' src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt="avatar" />
        </div>
        <div className='flex justify-evenly m-4 items-center'>
            <img className='w-[70px] rounded-full' src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt="avatar" />
            <span className="text-xl text-white">Alan Walker</span>
        </div>


    </div>)
}

export default DetailSong