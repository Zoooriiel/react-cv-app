import React from 'react'

const PreviewEduExpSect = ({eduInfo, handleEdu}) => {
  return (
    <div className='shadow-lg min-w-[550px] p-6 bg-white h-[30vh] w-[40vw]'>
        <div>
          <h1 className='font-bold'>EDUCATION</h1>
          <hr className='my-1'/>

          <p className='text-lg text-black font-bold'>
          {eduInfo.studyTitle || <span className="text-gray-400">Bachelor's in Psychology</span>}
          </p>
          <p className='text-lg text-black font-bold'>
          {eduInfo.schoolName || <span className=" text-gray-400">Harvard University</span>}
        </p>

            <div className='flex justify-center'>
        <button 
          onClick={handleEdu} 
          className={`py-1 px-8 text-white rounded-md font-semibold 
            ${eduInfo.isEditing ? "bg-red-500 hover:bg-red-600" : "bg-orange-500 hover:bg-orange-600"}`}
          type="button"
        >
          {eduInfo.isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

        </div>
    </div>
  )
}

export default PreviewEduExpSect
