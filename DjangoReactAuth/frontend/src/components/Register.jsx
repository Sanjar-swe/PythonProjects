import "../App.css";
import { Box } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import MyPassField from "./forms/MyPassField";
import MyButton from "./forms/MyButton";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={"myBackground"}>
      <Box className={"whiteBox"}>
        <Box className={"itemBox"}>
          <Box className={"title"}>User Registration</Box>{" "}
        </Box>
        <Box className={"itemBox"}>
          <MyTextField label={"Email"} />
        </Box>
        <Box className={"itemBox"}>
          <MyPassField label={"Password"} />
        </Box>
        <Box className={"itemBox"}>
          <MyPassField label={"Confirm password"} />
        </Box>
        <Box className={"itemBox"}>
          <MyButton label={"Register"} />
        </Box>
        <Box className={"itemBox"}>
          <Link to="/">Already Registered? Please Login</Link>
        </Box>
      </Box>
    </div>
  );
};

export default Register;
