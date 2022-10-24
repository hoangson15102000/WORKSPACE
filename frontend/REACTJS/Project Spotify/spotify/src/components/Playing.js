
import React, { useContext } from "react";
import AudioPlayer from 'react-h5-audio-player';
import SAMPLE_MP3_URL from 'react-h5-audio-player';
import { Songs } from './/Context'
export default function Playing() {
    const { song } = useContext(Songs);
    // Sau khi truyền song từ useCOntext sang thì truyền song.url vào thư viện thì nhạc sẽ chạy được nhé !!
    return (
        <div>
            <AudioPlayer className="bg-gray-800 "
                src={song.url} layout="stacked-reverse"
                showSkipControls={true} showJumpControls={false} />
        </div>
    )
}