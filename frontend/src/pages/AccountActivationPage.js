import React from 'react'
import { useParams } from 'react-router-dom';

const AccountActivationPage = () => {
      const { uid, token } = useParams();

  return (
    <div>
          Account Activation Page 
          uid={uid}
          <br></br>
          token={token}
    </div>
  )
}

export default AccountActivationPage
