import React from 'react';

const PreviewGeneralInfo = ({ generalInfo, handleGeneralEdit }) => {
  return (
    <div className='min-w-[550px] bg-white shadow-lg h-[30vh] space-y-4 flex flex-col justify-between'>
      <div className='p-6 flex flex-col gap-2'>
        <h1 className='text-center text-3xl font-bold text-gray-800'>
          {generalInfo.name || <span className="italic text-gray-400">Enter your name</span>}
        </h1>
        <p className='text-lg text-gray-600'>
          {generalInfo.email || <span className="italic text-gray-400">Enter your email</span>}
        </p>
        <p className='text-lg text-gray-600'>
          {generalInfo.phoneNum || <span className="italic text-gray-400">Enter your phone number</span>}
        </p>
      </div>

      <div className='flex justify-center'>
        <button 
          onClick={handleGeneralEdit} 
          className={`py-1 px-8 text-white rounded-md font-semibold 
            ${generalInfo.isEditing ? "bg-red-500 hover:bg-red-600" : "bg-orange-500 hover:bg-orange-600"}`}
          type="button"
        >
          {generalInfo.isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
    </div>
  );
}

export default PreviewGeneralInfo;
