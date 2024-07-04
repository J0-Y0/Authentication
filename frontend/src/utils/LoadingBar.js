import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import AuthContext from "../context/AuthContext";
import { LinearProgress } from "@mui/material";


export const LoadingBar = () => {
    const {loading} = React.useContext(AuthContext)
    
    return ( loading&&<LinearProgress />);
}

export  function LoadingButton({value ="Send",type="button"}) {
    const { loading } = React.useContext(AuthContext);






  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ marginY: "10px" , position: "relative" }}>
        <Button variant="contained" disabled={loading} type={type}>
          {value}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
