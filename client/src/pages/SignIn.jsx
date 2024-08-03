import React from "react";
import styles from "../stylesheets/SignIn.module.css";
import {useState } from 'react';

function SignIn() {

const [formData,setFormData] = useState({
    username:'',
    email:'',
    password:''
})
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
        ...formData,
        username:'',
        email:'',
        password:''

    });
};

  return (
    <div className={styles.signinbody}>
      <div className={styles.boxdiv}>
        <h1>SignIn</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
          <input type="email" name="email" value={formData.email} onChange={handleChange}  placeholder="email" />
          <input type="password" name="password" value={formData.password} onChange={handleChange}  placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
