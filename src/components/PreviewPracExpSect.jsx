import React from 'react'

const PreviewPracExpSect = ({handleJob, jobInfo}) => {
  return (
    <div className='shadow-lg p-6 min-w-[550px] bg-white h-[40vh] w-[40vw]'>
        <div>
        <h1 className='font-bold'>WORK EXPERIENCE</h1>
        <hr className='my-1'/>

          <div className='flex justify-between'>   
          <p className='text-lg text-black font-bold'>
          {jobInfo.jobTitle || <span className="text-gray-400">Software Engineer</span>}
          </p>
          <p className='text-lg text-black'>
          {jobInfo.jobDuration || <span className="italic text-gray-400">Month Year - Month Year</span>}
          </p>
          </div>

          <p className='text-lg text-black font-bold'>
          {jobInfo.compName || <span className="italic text-gray-400">Google Inc</span>}
          </p>
          <p className='text-lg text-black break-words w-full'>
          {jobInfo.jobDesc || <span className="italic text-gray-400">Did this.. Did that...</span>}
          </p>
           
      <div className='flex justify-center'>
        <button 
          onClick={handleJob} 
          className={`py-1 px-8 text-white rounded-md font-semibold 
            ${jobInfo.isEditing ? "bg-red-500 hover:bg-red-600" : "bg-orange-500 hover:bg-orange-600"}`}
          type="button"
        >
          {jobInfo.isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

        </div>
    </div>
  )
}

export default PreviewPracExpSect
