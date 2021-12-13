import React, { useState } from "react";
import styles from "./styles.module.scss";

export default function LoginForm({ onSubmit }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin" && pass === "123") {
      alert("LOGGED IN !");
      onSubmit(user);
    } else {
      alert("incorrect user or pass");
    }
  };
  return (
    <div className={styles.loginForm} onSubmit={handleSubmit}>
      <form>
        <fieldset>
          <div>
            <label htmlFor="user">User</label>
            <input type="text" name="User" id="user" required onChange={(e) => setUser(e.target.value)} />
          </div>
          <div>
            <label htmlFor="passwd">Password</label>
            <input type="password" name="Password" id="passwd" required  onChange={(e) => setPass(e.target.value)}/>
          </div>
          <input type="submit" value="LOGIN" />
        </fieldset>
      </form>
    </div>
  );
}
