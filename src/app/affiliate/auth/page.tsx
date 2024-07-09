import Reg from "@/components/utilComponents/reg/Reg";
import "./register.scss";
import PagesWrapper from "@/components/pageWrapper";

const Register = () => {
  return (
    <PagesWrapper>
      <div className="register">
        <div className="container">
          <div className="registerWrapper">
            <Reg isAffiliate />
          </div>
        </div>
      </div>
    </PagesWrapper>
  );
};

export default Register;
