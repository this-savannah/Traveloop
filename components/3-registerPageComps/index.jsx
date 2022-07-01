import Container from "../../ui/container/Container"
import styles from "./index.module.scss"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useRouter } from "next/router"

const RegisterUser = () => {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()

  const { registerUser } = useAuth()

  const createUser = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Please enter email and password")
      return
    }

    try {
      await registerUser(userEmail, userPassword)
      router.push("/dashboard")
    } catch (error) {
      setError("incorrect email or password")
    }
  }

  return (
    <>
      <section className={styles.registerSection}>
        <Container>
          <div className={styles.registerWrapper}>
            <p>{error}</p>
            <form onSubmit={createUser} className={styles.registerForm}>
              {/* Email Field */}
              <div className={styles.inputWrapper}>
                <label htmlFor='email' className={styles.label}>
                  Email
                </label>
                <input
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  type='text'
                  id='email'
                  className={styles.inputField}
                />
              </div>
              {/* Password Field */}
              <div className={styles.inputWrapper}>
                <label htmlFor='password' className={styles.label}>
                  Password
                </label>
                <input
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  type='password'
                  name='password'
                  autoComplete='on'
                  id='password'
                  className={styles.inputField}
                />
              </div>
              {/* Register Button */}
              <button className={styles.registerButton}>Register</button>
            </form>
            {}
          </div>
        </Container>
      </section>
    </>
  )
}

export default RegisterUser
