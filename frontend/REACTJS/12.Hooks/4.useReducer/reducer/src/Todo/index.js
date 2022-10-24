
import { useReducer, useRef } from 'react';
import { SET_JOB, SET_JOBS_LIST, DELETE_JOB } from './constants';
import { addJob, setJob, deleteJob } from './actions';
import reducer, { initState } from './reducer';


// 1. initial state
// const initState = {
//     job: '',
//     jobs: []
// }
// 2. actions

// const SET_JOB = 'set_job';
// const SET_JOBS_LIST = 'set_jobs_list';
// const DELETE_JOB = 'delete_job';
// tạo ra 3 actions dưới dạng functions
// const setJob = payload => {
//     return {
//         type: SET_JOB,
//         payload
//     }
// }
// const addJob = payload => {
//     return {
//         type: SET_JOBS_LIST,
//         payload
//     }
// }
// const deleteJob = payload => {
//     return {
//         type: DELETE_JOB,
//         payload
//     }
// }
// console.log(setJob('Ruabat'));

// 3. reducer
// const reducer = (state, action) => {
//     switch (action.type) {
//         case SET_JOB:
//             return {
//                 ...state,
//                 job: action.payload
//             }
//         case SET_JOBS_LIST:
//             return {
//                 ...state,
//                 jobs: [...state.jobs, action.payload]
//             }
//         case DELETE_JOB:

//             const newJobs = [...state.jobs]
//             newJobs.splice(action.payload, 1)
//             return {
//                 ...state,
//                 jobs: newJobs
//             }
//         default:

//     }
// }

// 4. dispatch


function App() {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs } = state;
    const inputRef = useRef()
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus() /// FOCUS vao input


    }
    const handleDelete = () => { }
    // console.log(state
    // );

    return (
        <div style={{ padding: 32 }}>
            <h1>TODO LIST </h1>
            <input
                ref={inputRef}
                value={job} // đang để value mcawj định nên k gõ đc
                onChange={(e) => { dispatch(setJob(e.target.value)) }}
                placeholder='fill the input ...'
            />
            <button onClick={handleSubmit}>ADD</button>
            <ul>
                {jobs.map((job, index) => (<li key={index}>{job}
                    <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                </li>))}

                <li >Quet nha &times;</li>
            </ul>


        </div>
    )
}


export default App;
