import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
//import OTPRequest from "./components/OTPRequest";
//import OTPVerify from "./components/OTPVerify";
import OTPForm from "./components/OTPForm";




function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			{/* <Route path="/request-otp" exact element={<OTPRequest />} />
            <Route path="/verify-otp" exact element={<OTPVerify />} /> */}
			<Route path="/otp" element={<OTPForm />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
     	</Routes>
		
	);
}



export default App;

