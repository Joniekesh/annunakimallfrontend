"use client";

import PagesWrapper from "@/components/pageWrapper";
import "./resetPassword.scss";

const ResetPassword = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <PagesWrapper>
      <div className="resetPassword">
        <div className="container">
          <div className="resetPasswordWrapper">
            <div className="innerWrapper">
              <span>Reset Password</span>
              <p>Please kindly reset your password below.</p>
              <form onSubmit={handleSubmit}>
                <input type="password" placeholder="Enter Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PagesWrapper>
  );
};

export default ResetPassword;
