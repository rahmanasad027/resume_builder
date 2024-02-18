import React,{useEffect} from 'react'
import { fetchResumeInfoAPI } from '../../../../api/resumeInfo'

const ReviewResume = () => {
  useEffect(() => {
    const resumeData = fetchResumeInfoAPI()
    console.log('resume Data', resumeData)
  }, [])
  return (
    <div>ReviewResume</div>
  )
}

export default ReviewResume