import React from 'react'
import Card from './components/Card'
const App = () => {
  
  const jobOpenings = [
  {
    brandLogo: "https://www.google.com/favicon.ico",
    company: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQou1hfV3QBJiAmVcrhvGJ914WSvaezZCLS-ZrZvew6oQ&s=10",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "SDE I",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.microsoft.com/favicon.ico",
    company: "Microsoft",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.facebook.com/favicon.ico",
    company: "Meta",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hour",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://www.apple.com/favicon.ico",
    company: "Apple",
    datePosted: "10 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$44/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.netflix.com/favicon.ico",
    company: "Netflix",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://www.nvidia.com/favicon.ico",
    company: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.salesforce.com/favicon.ico",
    company: "Salesforce",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$39/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.adobe.com/favicon.ico",
    company: "Adobe",
    datePosted: "10 weeks ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.ibm.com/favicon.ico",
    company: "IBM",
    datePosted: "2 weeks ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$47/hour",
    location: "Mumbai, India"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx) {
        return <div key = {idx}>
          <Card company = {elem.company} img = {elem.brandLogo} pay = {elem.pay} location = {elem.location} tag1 = {elem.tag1} tag2 = {elem.tag2}  post = {elem.post}  datePosted = {elem.datePosted}/>
        </div>
      })}
    </div>
  )
}

export default App
