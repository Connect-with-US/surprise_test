import React from 'react'
import signupImg from "../assets/login.png"
import Template from '../components/Template'

const Signup = () => {
  return (
    <Template
      title="Join the millions learning with QuizFuse for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
    />
  )
}

export default Signup;
