import React from 'react'

const GeneralInfoSect = ({handleSubmit, generalInfo, handleName, handleEmail, handlePhoneNum}) => {

  return (
<form onSubmit={handleSubmit} className='shadow-md bg-white rounded-md w-80 h-85 flex flex-col p-6 justify-center items-center gap-4'>
    <div className='flex flex-col gap-1'>
        <label className='font-semibold' htmlFor="name">Name:</label>
        <input 
          onChange={handleName} 
          className="w-70 h-8 bg-gray-100 rounded-md" 
          value={generalInfo.name} 
          id='name' 
          type="text" 
          placeholder='First and last name'/>
    </div>

    <div className='flex flex-col gap-1'>
        <label className='font-semibold' htmlFor="email">Email:</label>
        <input 
          onChange={handleEmail} 
          className="w-70 h-8 bg-gray-100 rounded-md" 
          value={generalInfo.email} 
          id='email' 
          type="email" 
          placeholder='Enter email'/>
    </div>

    <div className='flex flex-col mb-2 gap-1'>
        <label className='font-semibold' htmlFor="phoneNum">Phone Number:</label>
        <input 
          onChange={handlePhoneNum} 
          className="w-70 h-8 bg-gray-100 rounded-md" 
          value={generalInfo.phoneNum} 
          id='phoneNum' 
          type="text" 
          placeholder='Enter phone number'/>
    </div>

    <button className="min-w-30 h-9 bg-black text-white rounded-md hover:bg-gray-700" type="submit">Save</button>

</form>


  )
}

export default GeneralInfoSect
