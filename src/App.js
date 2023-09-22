import Cards from './components/Cards';
// import Card from './components/Card';
import Navbar from './components/Navbar';
// import data from './data'
import Filter from './components/Filter';
import Spinner from './components/Spinner';
import { filterData, apiUrl } from './data';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify'

function App() {
  const [courses, setCourses] = useState([])
  const [category, setCategory] = useState(filterData[0].title);

  // const [courses,setCourses] = useState(null)
  const [loading, setLoading] = useState(true)




  async function fetchData() {
    setLoading(true)
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      // output copy into setdata
      setCourses(output.data);


    }
    catch (error) {
      toast.error("koi dikkat hai network me")
    }
    setLoading(false)
  }

  console.log(courses)


  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <div>

        <Navbar></Navbar>
      </div>


      <div>
        <div>
          <Filter 
          filterData={filterData}
          category={category}
          setCategory={setCategory}>
            </Filter>
        </div>

        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
          }
          {/* <Cards courses = {courses}/> */}
        </div>

      </div>

    </div>
  );
}

export default App;
