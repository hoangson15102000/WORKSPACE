import { memo } from 'react'


function Content() {
    console.log('render');

    return (<div>Hello</div>)
}
export default memo(Content);