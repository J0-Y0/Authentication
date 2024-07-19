import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import CenteredContainer from "../utils/CenteredContainer";
import { LoadingBar } from "../utils/LoadingBar";

const AccountActivationPage = () => {
  const { uid, token } = useParams();
  const { Activate } = useContext(AuthContext);

useEffect(() => {
    if (uid && token) {
      Activate(uid, token);
    }
  }, []);

  return (
    <CenteredContainer>
      <LoadingBar />
      
      <div>Activating your account...</div>
    </CenteredContainer>
  );
};

export default AccountActivationPage;
