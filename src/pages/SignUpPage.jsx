import React from 'react'
import PagesCoverComponent from '../component/pagesCoverComponent'
import SignupContentComponent from '../component/SignupContentComponent'
import GetAppComponent from '../component/GetAppComponent'


export default function SignUp() {
  return (
    <>
    <PagesCoverComponent firstWord='signup' secondWord='form'/>
    <SignupContentComponent></SignupContentComponent>
    <GetAppComponent></GetAppComponent>
    </>
  )
}
