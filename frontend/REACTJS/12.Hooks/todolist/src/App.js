import { useState } from 'react'

function App() {


  const [list, setList] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs;
    // Đưa vào để giá trị init dùng 1 lần, tốt cho perfomance
  });
  const [job, setJob] = useState('');

  const handleSubmit = () => {
    setList((prev) => {
      const newJobs = [...prev, job];
      // Save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;

    });
    setJob('')
  }
  const getParent = (element) => {
    return element.parentElement;
  };
  const handleDelete = (e) => {
    //Lấy nội dung thẻ cha 1
    const textItem = getParent(e.target).innerText;
    //Lọc phần nội dung thừa của thẻ con
    const str = textItem.replace(e.target.innerText, "");
    //Kiểm tra và xoá tag tương ứng
    if (list.includes(str)) {
      const jobRepair = list.filter((job) => job !== str);
      localStorage.setItem("jobs", jobRepair);
      setList(jobRepair);
    }
  };



  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(e) => { setJob(e.target.value) }} />
      <button onClick={handleSubmit}>Add</button>


      <ul>
        {list.map((list, index) => (
          <li key={index}>{list}<button onClick={handleDelete}>Delete</button></li>
        ))}
      </ul>
    </div>
  )
}
export default App;
