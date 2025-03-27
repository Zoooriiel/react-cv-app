import { useState } from 'react'
import GeneralInfoSect from './components/GeneralInfoSect'
import PreviewGeneralInfo from './components/PreviewGeneralInfo';
import PreviewEduExpSect from './components/PreviewEduExpSect';
import EduExpSect from './components/EduExpSect';
import PreviewPracExpSect from './components/PreviewPracExpSect';
import PracExpSect from './components/PracExpSect';

function App() {

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phoneNum: "",
    isEditing: false,
    isVisible: false,
  })

  const [eduInfo, setEduInfo] = useState({
    schoolName: "",
    studyTitle: "",
    isEditing: false,
    isVisible: false,
  })

  const [jobInfo, setJobInfo] = useState({
    jobTitle: "",
    jobDuration: "",
    compName: "",
    jobDesc: "",
    isEditing: false,
    isVisible: false,
  })


  const handleGeneral = () => {
    setGeneralInfo((prev) => ({
      ...prev, 
      isEditing: !prev.isEditing, 
      isVisible: !prev.isVisible,
    }))
  }

  const handleEdu = () => {
    setEduInfo((prev) => ({
      ...prev,
      isEditing: !prev.isEditing,
      isVisible: !prev.isVisible,
    }))
  }

  const handleJob = () => {
    setJobInfo((prev) => ({
      ...prev,
      isEditing: !prev.isEditing,
      isVisible: !prev.isVisible,
    }))
  }

  const handleChange = (section, field) => (event) => {
    const value = event.target.value;

    switch (section) {
      case 'general':
        setGeneralInfo((prev) => ({...prev, [field]: value}))
        break;
      case 'edu':
        setEduInfo((prev) => ({...prev, [field]: value}))
        break;
      case 'job':
        setJobInfo((prev) => ({...prev, [field]: value}))
        break;
      default:
        break;
    }
  }

  const handleSubmit = (section) => (event) => {
    event.preventDefault();

    switch (section) {
      case 'general':
        setGeneralInfo((prev) => ({
          ...prev, 
          isEditing: !prev.isEditing,
          isVisible: !prev.isVisible})
        )
        break;
      case 'edu':
        setEduInfo((prev) => ({
          ...prev, 
          isEditing: !prev.isEditing,
          isVisible: !prev.isVisible})
          )
        break;
      case 'job':
        setJobInfo((prev) => ({
          ...prev, 
          isEditing: !prev.isEditing,
          isVisible: !prev.isVisible})
        )
        break;
      default:
        break;
    }

  }

  return (
    <div className='pt-10 pb-10 flex justify-center items-center min-h-screen gap-10'>

      <div className='flex flex-col gap-6'>
      {generalInfo.isVisible && <GeneralInfoSect
      generalInfo={generalInfo}

      handleName={(event) => handleChange("general", "name")(event)}
      handleEmail={(event) => handleChange("general", "email")(event)}
      handlePhoneNum={(event) => handleChange("general", "phoneNum")(event)}

      handleSubmit={(event) => handleSubmit("general")(event)}
      />
      }


      {eduInfo.isVisible && <EduExpSect
      eduInfo={eduInfo}

      handleStudyTitle={(event) => handleChange("edu", "studyTitle")(event)}
      handleSchoolName={(event) => handleChange("edu", "schoolName")(event)}
      
      handleSubmit={(event) => handleSubmit("edu")(event)}
      />}
      

      {jobInfo.isVisible && <PracExpSect
      jobInfo={jobInfo}

      handleJobTitle={(event) => handleChange("job", "jobTitle")(event)}
      handleJobDuration={(event) => handleChange("job", "jobDuration")(event)}
      handleCompName={(event) => handleChange("job", "compName")(event)}
      handleJobDesc={(event) => handleChange("job", "jobDesc")(event)}

      handleSubmit={(event) => handleSubmit("job")(event)}
      />}
      </div>


      <div className='h-[120vh] overflow-y-auto flex flex-col'>
      <PreviewGeneralInfo 
      generalInfo={generalInfo}
      handleGeneralEdit={handleGeneral}
      />

      <PreviewEduExpSect
      eduInfo={eduInfo}
      handleEdu={handleEdu}
      />

      <PreviewPracExpSect 
      jobInfo={jobInfo}
      handleJob={handleJob}
      />
      </div>
    </div>
  )
}

export default App
