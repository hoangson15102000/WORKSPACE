import { memo } from 'react'


function Content({ onIncrease }) {
    console.log('render');

    return (<div style={{ fontSize: 30, fontWeight: 900 }}>
        <h1>HELLO AE FABET 88</h1 >
        <button onClick={onIncrease}>Click me!</button>
    </div >)
}
export default memo(Content);