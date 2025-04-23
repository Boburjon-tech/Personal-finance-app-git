// src/pages/Login.jsx

import FormInput from "../../components/formInput/FormInput";
import style from "./Login.module.scss";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login() {
  const { data, isPending, loginn } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    loginn(email, password); // Call the login function with email and password
    e.target.reset(); // Reset the form after submission
  };

  return (
    <section className={style.login}>
      <div className={`${style.container} container`}>
        <div className={style.login_left}>
          <img className={style.left_logo} src="../../images/logo-large.svg" width="121.45px" height="21.76px" />
          <h3 className={style.left_h3_sentence}>
            Keep track of your money
            and save for your future
          </h3>
          <p className={style.left_par_sentence}>
            Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
        <div className={style.header_tabled_div}>
          <img className={style.header_tabled_logo} src="../../images/logo-large.svg" />
        </div>
        <div className={style.login_right}>
          <div>
            <h1 className={style.right_title}>Login</h1>
            <form onSubmit={handleSubmit} className={style.right_form}>
              <FormInput type="email" name="email" label="Email" />
              <FormInput type="password" name="password" label="Password" />
              
              {/* Display different button states based on isPending */}
              {!isPending && <button className={`${style.login_btn} btn`}>Login</button>}
              {isPending && <button className={`${style.login_btn} btn`} disabled>Loading...</button>}              

              <div className={style.nav_to_div}>
                <p className={style.nav_to_title}>Need to create an account?</p>
                <Link className={style.nav_to_link} to="/register">Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
