import React from 'react'

const EduExpSect = ({handleSubmit, eduInfo, handleSchoolName, handleStudyTitle}) => {
  return (
    <form onSubmit={handleSubmit} className='shadow-lg bg-white rounded-md w-80 h-65 flex flex-col p-6 justify-center items-center gap-4'>
       <div className='flex flex-col gap-1'>
      <label className='font-semibold' htmlFor="studyTitle">Title of Study:</label>
      <input onChange={handleStudyTitle} value={eduInfo.studyTitle} className="w-70 bg-gray-100 rounded-md h-8" id='studyTitle' type="text" placeholder='Enter title of study'/>
      </div>
      
      <div className='flex flex-col mb-2 gap-2'>
      <label className='font-semibold' htmlFor="schoolName">School Name:</label>
      <input onChange={handleSchoolName} value={eduInfo.schoolName} className="w-70 bg-gray-100 rounded-md h-8" id='schoolName' type="text" placeholder='Enter school name' />
      </div>

      <button className="min-w-30 h-9 bg-black text-white rounded-md hover:bg-gray-700" type="submit">Save</button>


    </form>
  )
}

export default EduExpSect
