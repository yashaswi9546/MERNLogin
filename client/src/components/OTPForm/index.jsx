// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";  // Assuming you have an OTP styles file

// const OTPForm = () => {
//     const [email, setEmail] = useState("");
//     const [otp, setOtp] = useState("");
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false); // Add loading state
//     const [step, setStep] = useState(1);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         if (step === 1) {
//             setEmail(e.target.value);
//         } else {
//             setOtp(e.target.value);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true); // Set loading state to true
//         try {
//             if (step === 1) {
//                 const url = "http://localhost:8080/api/otp/request-otp"; // Ensure this matches the route
//                 await axios.post(url, { email });
//                 setStep(2);
//             } else {
//                 console.log("Email:", email); // Log the email before sending
//                 console.log("OTP:", otp); // Log the OTP before sending
//                 const url = "http://localhost:8080/api/otp/verify-otp"; // Ensure this matches the route
//                 const { data: res } = await axios.post(url, { email, otp });
//                 localStorage.setItem("token", res.token);
//                 navigate("/");
//             }
//         } catch (error) {
//             if (error.response && error.response.status >= 400 && error.response.status <= 500) {
//                 setError(error.response.data.message);
//             }
//         } finally {
//             setLoading(false); // Reset loading state after API request
//         }
//     };

//     return (
//         <div className={styles.container}>
//             <form className={styles.form} onSubmit={handleSubmit}>
//                 <h1>{step === 1 ? "Request OTP" : "Verify OTP"}</h1>
//                 {step === 1 && (
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         onChange={handleChange}
//                         value={email}
//                         required
//                         className={styles.input}
//                     />
//                 )}
//                 {step === 2 && (
//                     <input
//                         type="text"
//                         placeholder="OTP"
//                         onChange={handleChange}
//                         value={otp}
//                         required
//                         className={styles.input}
//                     />
//                 )}
//                 {error && <div className={styles.error}>{error}</div>}
//                 <button type="submit" className={styles.button} disabled={loading}>
//                     {loading ? "Loading..." : (step === 1 ? "Send OTP" : "Verify OTP")}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default OTPForm;
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";  // Assuming you have an OTP styles file

const OTPForm = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Add loading state
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (step === 1) {
            setEmail(e.target.value);
        } else {
            setOtp(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true
        try {
            if (step === 1) {
                const url = "http://localhost:8080/api/otp/request-otp"; // Ensure this matches the route
                await axios.post(url, { email });
                setStep(2);
            } else {
                console.log("Email:", email); // Log the email before sending
                console.log("OTP:", otp); // Log the OTP before sending
                const url = "http://localhost:8080/api/otp/verify-otp"; // Ensure this matches the route
                const { data: res } = await axios.post(url, { email, otp });
                localStorage.setItem("token", res.token);
                //navigate("/");
                window.location = "/";
            }
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        } finally {
            setLoading(false); // Reset loading state after API request
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>{step === 1 ? "Request OTP" : "Verify OTP"}</h1>
                {step === 1 && (
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={email}
                        required
                        className={styles.input}
                    />
                )}
                {step === 2 && (
                    <input
                        type="text"
                        placeholder="OTP"
                        onChange={handleChange}
                        value={otp}
                        required
                        className={styles.input}
                    />
                )}
                {error && <div className={styles.error}>{error}</div>}
                <button type="submit" className={styles.button} disabled={loading}>
                    {loading ? "Loading..." : (step === 1 ? "Send OTP" : "Verify OTP")}
                </button>
            </form>
        </div>
    );
};

export default OTPForm;
