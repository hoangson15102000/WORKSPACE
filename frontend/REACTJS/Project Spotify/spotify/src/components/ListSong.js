
import React, { useContext, useState } from "react";
import { Songs } from '../components/Context';
function ListSong() {
    const { DataSongs, handleSetSong } = useContext(Songs);
    // console.log(DataSongs);
    const [idSong, setidSong] = useState(0)
    const handlePlaySong = (idSong) => {
        setidSong(idSong);
        handleSetSong(idSong)


    }
    return (<div className='col-span-2 overflow-y-scroll ' >
        <table className='w-full '>
            <thead className='text-white'>
                <tr className=' h-12'>
                    <th className="w-[10%]">#</th>
                    <th className="w-[60%] text-left">Title</th>
                    <th className="w-[20%] text-cyan-500">Author</th>
                    <th className="w-[10%]"><i className="fa-sharp fa-solid fa-download"></i></th>

                </tr>

            </thead>
            <tbody  >
                {DataSongs.map((song, index) => (<tr
                    key={index}
                    className={`h-12 bg-slate-800 text-gray-500 hover:bg-slate-600 hover:text-cyan-300 ${idSong === song.id && 'text-teal-200 bg-cyan-800'}`}
                    onClick={() => handlePlaySong(song.id)}
                >
                    <th className="text-center">{song.id + 1}</th>
                    <th className="text-left">{song.name}</th>
                    <th>{song.author}</th>
                    <th><a href={song.url} class="fa-sharp fa-solid fa-download"></a></th>

                </tr>))}


            </tbody>
        </table>


    </div>)
}

export default ListSong;