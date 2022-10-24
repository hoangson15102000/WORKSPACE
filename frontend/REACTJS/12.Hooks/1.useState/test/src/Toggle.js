import { useEffect, useState } from "react";


//Setinterval, setTimeout, clearInterval, clearTimeout

// Clean up function luon duoc goi truoc khi callback duoc goi tru lan comoponent dc mout

// function Toggle() {
//     const [countdown, setCountdown] = useState(1000);
//     useEffect(() => {
//         console.log('mount or re render')
//         const timeID = setInterval(() => {
//             setCountdown(prev => prev - 1)
//         }, 1000)
//         // return () => clearInterval(timeID)
//         // setTimeout(() => {
//         //     setCountdown(prev => prev - 1)
//         // }, 1000)
//         return () => {
//             console.log('clean up');
//         }
//     }, [])


//     return (
//         <div style={{ fontSize: 36 }}><h1>{countdown}</h1></div>
//     )
// }


// export default Toggle;

const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì ? Tại sao nên học ReactJS '
    },
    {
        id: 2,
        name: 'SPA/MPA là gì ?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }

];


function Toggle() {
    const [avt, setAvt] = useState();
    const [lessonId, setLessonId] = useState(1)
    useEffect(() => {
        //clean up
        return () => {
            avt && URL.revokeObjectURL(avt.preview)
        }
    }, [avt])
    const handleAvt = (e) => {
        const file = e.target.files[0];
        // file la 1 object
        file.preview = URL.createObjectURL(file)
        setAvt(file)

    }
    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])
    return (<div>
        <input type="file" onChange={handleAvt}></input>
        {avt && (<img src={avt.preview} width="80%"></img>)}
        <ul>{lessons.map(lesson => (<li key={lesson.id}
            style={{ color: lessonId === lesson.id ? 'red' : 'black' }}
            onClick={() => setLessonId(lesson.id)}

        >
            {lesson.name}
        </li>))}

        </ul>
    </div >)


}


export default Toggle;
