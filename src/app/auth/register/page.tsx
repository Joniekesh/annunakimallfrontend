import PagesWrapper from "@/components/pageWrapper";
import "./register.scss";
import Reg from "@/components/utilComponents/reg/Reg";

const Register = () => {
  return (
    <PagesWrapper>
      <div className="auth">
        <div className="container">
          <div className="authWrapper">
            <Reg />
          </div>
        </div>
      </div>
    </PagesWrapper>
  );
};

export default Register;
