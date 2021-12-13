import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import styles from "./styles.module.scss";

export default function NavBar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [userName, setUserName] = useState("");

  const handleClick = () => {
    setShowLoginForm(true);
  };

  const onFormSubmitted = (user) => {
    setUserName(user);
    setShowLoginForm(false);
  };

  return (
    <div className={styles.navBar}>
      <div className="container d-flex ai-center h-100">
        {userName ? <div>{`WELCOME ${userName}`}</div> : <button onClick={handleClick}>LOGIN</button>}
      </div>
      {showLoginForm && <LoginForm onSubmit={onFormSubmitted} />}
    </div>
  );
}
