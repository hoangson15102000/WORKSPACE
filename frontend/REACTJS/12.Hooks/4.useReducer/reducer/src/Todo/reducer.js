
import { SET_JOB, SET_JOBS_LIST, DELETE_JOB } from './constants'
export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case SET_JOBS_LIST:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:

            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        default:

    }
}

export default reducer