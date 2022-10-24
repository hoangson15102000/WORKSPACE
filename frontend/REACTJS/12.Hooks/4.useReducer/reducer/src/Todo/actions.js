
import { SET_JOB, SET_JOBS_LIST, DELETE_JOB } from './constants'

export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
export const addJob = payload => {
    return {
        type: SET_JOBS_LIST,
        payload
    }
}
export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}