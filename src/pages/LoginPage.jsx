import React from 'react'
import PagesCoverComponent from '../component/pagesCoverComponent'
import SigninContentComponent from '../component/SigninContentComponent'

export default function Login() {
  return (
    <>
    <PagesCoverComponent firstWord='login' secondWord='form'/>
    <SigninContentComponent></SigninContentComponent>
    </>
  )
}
