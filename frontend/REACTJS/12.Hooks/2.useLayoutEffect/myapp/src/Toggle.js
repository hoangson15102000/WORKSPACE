import { memo, useLayoutEffect, useState } from 'react';
import { useEffect } from 'react'

// useEffect
// 1. Cập nhập lại state
// 2. Cập nhập DOM ( mutated)
// 3. Render lại UI
// 4. Gọi clean up nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhập lại state
// 2. Cập nhập DOM ( mutated)
// 3. Gọi clean up nếu deps thay đổi
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI
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


// memo - ghi nhớ lại props của component để quyết định có render component 
// đó hay k để tối ưu về hiệu năng
// xử lý component tránh re-render để trong những tình huống k cần thiết

// 1. memo()  -> Higher order component ( HOC) - component bậc cao
// 2. useCallback()
// Hooks
// HOC
// Render props