
import React, { useState } from 'react'

export default function TodoForm({ onSubmit }) {
    const [value, setValue] = useState('')
    const handleForm = (e) => {
        // console.log(e.target.value);
        // update state
        setValue(e.target.value);

    }
    const handleSubmit = (e) => {
        // ngăn chặn hành động enter reload lại page
        e.preventDefault();
        // const formValues = {
        //     title: value
        // }

        onSubmit({ title: value });
        // reset
        setValue('')


    }
    return (<form onSubmit={handleSubmit}
    ><input type="text"
        placeholder='Nhap vao day'
        onChange={handleForm}
        value={value} /></form>

    )
}
