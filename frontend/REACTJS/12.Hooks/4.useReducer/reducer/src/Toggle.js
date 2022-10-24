import { memo, useLayoutEffect, useState } from 'react';
import { useEffect } from 'react'


function Toggle() {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    })
    const handleRun = () => {
        setCount(count + 1)
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>

    )
}
export default Toggle;
