import loginSplash from "../assets/loginSplash.svg";
import { AuthenticationForm } from "../components/Login/Form";

const Login = () => {
  return (
    <div className="h-[100vh] w-[100vw] p-0 m-0 flex flex-row justify-center items-center overflow-clip">
      <div className="w-[100vw] lg:w-[40vw]">
        <AuthenticationForm />
      </div>
      <div className="hidden lg:block lg:w-[60vw] relative">
        <div className="absolute top-[13%] left-[20%] z-10">
          <div className="text-[1.8rem] text-[#3A424A] font-light">
            The future belongs to those who <br />{" "}
            <span className="text-[#3062D4] font-bold">believe</span> in the{" "}
            <span className="text-[#3062D4] font-bold">
              beauty of their dreams
            </span>
            .
          </div>
          <div className="text-[1.2rem] text-[#3A424A] font-medium text-right">
            - Eleanor Roosevelt
          </div>
        </div>
        <img src={loginSplash} alt="loginSplash" className="w-full" />
      </div>
    </div>
  );
};

export default Login;
