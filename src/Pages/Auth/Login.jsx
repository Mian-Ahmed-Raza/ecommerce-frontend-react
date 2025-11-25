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

export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        setError('')

        if(!email || !password){
            setError('Please enter email and password')
            return
        }

        // Authentication logic would go here
        // Example: await authService.login(email, password)
        
        navigate('/')
    }

    const strength = passwordStrength(password)

    return (
        <div className={styles.authContainer}>
            <div className={styles.authCard}>
                <div className={styles.authIllustration}>
                    <h3>Welcome back 👋</h3>
                    <p>Sign in to continue to your account and manage orders, wishlist and more.</p>
                    <Link to="/"><img src="/src/assets/home-img/logo-colored.svg" alt="logo" style={{width: '140px'}} /></Link>
                </div>

                <form className={styles.authForm} onSubmit={handleSubmit} aria-label="login form">
                    <h2>Sign in</h2>
                    <div className={styles.socialRow}>
                        <button type="button" className={styles.socialBtn}>Google</button>
                        <button type="button" className={styles.socialBtn}>Facebook</button>
                    </div>

                    <div className={styles.dividerRow}>Or continue with</div>

                    <div className={styles.authInput}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
                    </div>

                    <div className={styles.authInput}>
                        <label htmlFor="password">Password</label>
                        <div className={styles.passwordRow}>
                            <input id="password" type={show ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Your password" />
                            <button type="button" className={styles.togglePassword} onClick={() => setShow(s => !s)} aria-pressed={show}>{show ? 'Hide' : 'Show'}</button>
                        </div>

                        <div className={styles.strengthBar} aria-hidden>
                            <div className={styles.strengthFill} style={{width: `${(strength/4)*100}%`}} />
                        </div>
                    </div>

                    {error && <div className={styles.fieldError}>{error}</div>}

                    <div className={styles.authActions}>
                        <button type="submit" className={styles.primaryBtn}>Sign in</button>

                        <Link to="/register" className={styles.ghostBtn} style={{textDecoration:'none'}}>Create account</Link>
                    </div>

                    <div className={styles.formFooter}>
                        <Link to="/">Forgot password?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
