import { Link } from "react-router-dom";
import FormInput from "../../components/formInput/FormInput";
import style from  "./Register.module.scss"
import useRegister from "../../hooks/useRegister";

function Register() {
  const {data, isPending, register} = useRegister()
  const handleSubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password")

    register(name,email,password);
    e.target.reset();
  }

  return (
    <section className={style.login}>
      <div className={`${style.container} container`}>
      <div className={style.login_left}>
        <img className={style.left_logo} src="../../images/logo-large.svg" width="121.45px" height="21.76px" />
        
          <h3 className={style.left_h3_sentence}>
            Keep track of your money
            and save for your future
          </h3>
          <p  className={style.left_par_sentence}>
            Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.
          </p>
      </div>
      <div className={style.header_tabled_div}>
        <img className={style.header_tabled_logo} src="../../images/logo-large.svg"/>
      </div>
      <div className={style.login_right}>
        <div>
        <h1 className={style.right_title}>Sign up</h1>
          <form onSubmit={handleSubmit} className={style.right_form}>
            <FormInput type="Name" name="name" label="Name"/>
            <FormInput type="email" name="email" label="email"/>
            <FormInput type="password" name="password" label="Create password"/>
            <p className={style.password_authentification}>Passwords must be at least 8 characters</p>
            {!isPending && <button className={`${style.login_btn} btn`}>Sign up</button>}
            {isPending && <button className={`${style.login_btn} btn`}>Loading...</button>}

            <div className={style.nav_to_div}>
              <p className={style.nav_to_title}>Already have an account?</p>
              <Link className={style.nav_to_link} to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Register;
