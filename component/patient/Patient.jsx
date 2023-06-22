import React from 'react'
import { useAuth } from '../../context/auth';

const Patient = () => {
  const [auth, setAuth] = useAuth();
  console.log(auth)

  return (
    <div style={{ marginTop: '4rem' }}>Patient</div>
  )
}

export default Patient