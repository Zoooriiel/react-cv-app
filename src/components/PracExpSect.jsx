import React from 'react'

const PracExpSect = ({handleSubmit, jobInfo, handleJobTitle, handleJobDuration, handleCompName, handleJobDesc}) => {
  return (
    <form onSubmit={handleSubmit} className='shadow-md bg-white rounded-md w-80 h-100 flex flex-col p-6 justify-center items-center gap-4'>
      <div className='flex flex-col gap-1'>
      <label htmlFor="jobTitle">Job Title:</label>
      <input 
        onChange={handleJobTitle} 
        value={jobInfo.jobTitle} 
        className="h-8 w-70 bg-gray-100 rounded-md" 
        id='jobTitle' 
        type="text" 
        placeholder='Enter job title' />
      </div>

      <div className='flex flex-col gap-1'>
      <label htmlFor="jobDuration">Job Duration:</label>
      <input 
        onChange={handleJobDuration} 
        value={jobInfo.jobDuration} 
        className="w-70 bg-gray-100 rounded-md h-8" 
        id='jobTitle' 
        type="text" 
        placeholder='Enter job duration' />
      </div>

      <div className='flex flex-col gap-1'>
      <label htmlFor="compName">Company Name:</label>
      <input 
        onChange={handleCompName} 
        value={jobInfo.compName} 
        className="w-70 bg-gray-100 rounded-md h-8" 
        id='compName' 
        type="text" 
        placeholder='Enter company name'/>
      </div>

      <div className='flex flex-col mb-2 gap-1'>
      <label htmlFor="jobDesc">Job Description:</label>
      <textarea 
        onChange={handleJobDesc} 
        value={jobInfo.jobDesc} 
        className="w-70 bg-gray-100 rounded-md" 
        type="text" 
        id="jobDesc" 
        placeholder='Enter job description'/>
      </div>

      <button className="min-w-30 h-9 bg-black text-white rounded-md hover:bg-gray-700" type="submit">Submit</button>

    </form>
  )
}

export default PracExpSect
