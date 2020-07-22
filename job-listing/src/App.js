import React, {
  useState,
  useEffect
} from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  // with API
  // useEffect(() => {
  //   fetch('API URL').then(res => res.json()).then(data => {
  //     setJobs(data);
  //   });
  // }, []);

  useEffect(() => setJobs(data), []);
  
  const filterFunc = ({role, level, tools, languages}) => {
    if(filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if(languages) {
      tags.push(...languages);
    }

    if(tools) {
      tags.push(...tools);
    }

    return filters.every(filter => tags.includes(filter));
  };

  const handleTagClick = (tag) => {
    //avoid re-adding tag
    if(filters.includes(tag)) return;

    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter)  => {
    setFilters(filters.filter(f => f !== passedFilter));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  const filteredJobs = jobs.filter(filterFunc);

  return ( 
  <>
    <header className="bg-teal-500 mb-12">
      <img className='w-full' src="/images/bg-header-desktop.svg" alt="bg-image" />
    </header>
    <div className='container m-auto'>
    {filters.length > 0 &&  (
        <div className={`flex bg-white shadow-md -my-20 mb-16 mx-10 p-6 rounded z-10 relative`}>
          {filters.map((filter) => ( 
            <span className='cursor-pointer mr-4 mb-4 rounded font-bold lg:mb-0'
              onClick={() => handleFilterClick(filter)}>
                <span className='text-teal-500 bg-teal-100 p-2'>
                  {filter}
                </span>
                <span className='text-white bg-teal-500 p-2'>
                  ×
                </span>
            </span>
          ))}
          <button onClick={clearFilters} className='cursor-pointer font-bold text-gray-700 ml-auto'>Clear</button>
        </div>
    )}
    {jobs.length === 0 ? ( 
      <p> Jobs are fetching... </p>
    ) : (
      filteredJobs.map((job) => (
        <JobBoardComponent 
        job = {job} 
        key = {job.id} 
        handleTagClick={handleTagClick}
        />
      ))
    )} 
    </div>
  </>
);
}

export default App;

//TODOs
// 1. Study design & jason 
// 2. Job Board Component
// 3. Get the data from JSON
// 4. Pass down the date to JBC 
// 5. Style it
// 5.2 Style mobile
// 6. Filter component
// 7. Filter the data