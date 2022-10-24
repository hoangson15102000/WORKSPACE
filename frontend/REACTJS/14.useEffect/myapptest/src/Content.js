import { useEffect } from 'react'


// 3 trường hợp
// 1.useEffect(callback)
// 2.useEffect(callback,[])
// 3.useEffect(callback,[deps])


// Note 1. Callback luôn được gọi sau khi component  mounted

function Content() {
    useEffect()
    return (
        <div>
            <h1>Hello anh em</h1>
        </div>
    )
}
export default Content;