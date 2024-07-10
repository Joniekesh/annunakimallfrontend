"use client";

import PagesWrapper from "@/components/pageWrapper";
import "./forgotPassword.scss";

const ForgotPassword = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <PagesWrapper>
      <div className="forgotPassword">
        <div className="container">
          <div className="forgotPasswordWrapper">
            <div className="innerWrapper">
              <span>Forgot Password</span>
              <p>
                Please kindly provide your email. A reset link will be sent.
              </p>
              <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter Email" />
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PagesWrapper>
  );
};

export default ForgotPassword;
