import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Auth.module.css'

function passwordStrength(pw){
    if(!pw) return 0
    let score = 0
    if(pw.length >= 6) score += 1
    if(/[A-Z]/.test(pw)) score += 1
    if(/\d/.test(pw)) score += 1
    if(/[^A-Za-z0-9]/.test(pw)) score += 1
    return Math.min(score, 4)
}

export default function Register(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        setError('')

        if(!name || !email || !password || !confirm){
            setError('Please fill all fields')
            return
        }

        if(password.length < 6){
            setError('Password must be at least 6 characters')
            return
        }

        if(password !== confirm){
            setError('Passwords do not match')
            return
        }

        // Simulate register
        console.log('register', { name, email })
        navigate('/')
    }

    return (
        <div className={styles.authContainer}>
            <div className={styles.authCard}>
                <div className={styles.authIllustration}>
                    <h3>Create account</h3>
                    <p>Join us to manage your orders, track shipments and save favorites.</p>
                    <img src="/src/assets/home-img/logo-colored.svg" alt="logo" style={{width: '140px'}} />
                </div>

                <form className={styles.authForm} onSubmit={handleSubmit} aria-label="register form">
                    <h2>Create your account</h2>

                    <div className={styles.socialRow}>
                        <button type="button" className={styles.socialBtn}><img src="/src/assets/home-img/google play.png" alt="Google"/> Google</button>
                        <button type="button" className={styles.socialBtn}><img src="/src/assets/home-img/facebook3.png" alt="Facebook"/> Facebook</button>
                    </div>

                    <div className={styles.dividerRow}>Or sign up with email</div>

                    <div className={styles.authInput}>
                        <label htmlFor="name">Full name</label>
                        <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" />
                    </div>

                    <div className={styles.authInput}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
                    </div>

                    <div className={styles.authInput}>
                        <label htmlFor="password">Password</label>
                        <div className={styles.passwordRow}>
                            <input id="password" type={show ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Create a password" />
                            <button type="button" className={styles.togglePassword} onClick={() => setShow(s => !s)} aria-pressed={show}>{show ? 'Hide' : 'Show'}</button>
                        </div>

                        <div className={styles.strengthBar}><div className={styles.strengthFill} style={{width: `${(passwordStrength(password)/4)*100}%`}} /></div>
                    </div>

                    <div className={styles.authInput}>
                        <label htmlFor="confirm">Confirm password</label>
                        <input id="confirm" type={show ? 'text' : 'password'} value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Confirm password" />
                    </div>

                    {error && <div className={styles.fieldError}>{error}</div>}

                    <div className={styles.authActions}>
                        <button type="submit" className={styles.primaryBtn}>Create account</button>

                        <Link to="/login" className={styles.ghostBtn} style={{textDecoration:'none'}}>Have an account?</Link>
                    </div>

                    <div className={styles.formFooter}>
                        By creating an account you agree to our <Link to="/">Terms</Link> and <Link to="/">Privacy Policy</Link>.
                    </div>
                </form>
            </div>
        </div>
    )
}
