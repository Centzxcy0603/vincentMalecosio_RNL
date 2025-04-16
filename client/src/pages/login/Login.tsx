import { useEffect } from "react";
import LoginForm from "../../components/forms/login/LoginForm";

const Login = () => {
    useEffect(() => {
        document.title = "Account Login";
    }, []);

    return (
        <>
            <div className="row">
                <div className="d-flex justify-content-center mt-5">
                    <div className="col-md-4">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
