import PagesWrapper from "@/components/pageWrapper";
import "./register.scss";
import Reg from "@/components/utilComponents/reg/Reg";

const Register = () => {
  return (
    <PagesWrapper>
      <div className="register">
        <div className="container">
          <div className="registerWrapper">
            <Reg isVendor />
          </div>
        </div>
      </div>
    </PagesWrapper>
  );
};

export default Register;
