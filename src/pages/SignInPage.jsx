import { SignIn } from '@clerk/clerk-react'
import { clerkUrls } from '../lib/clerk.js'
import { clerkDarkTheme } from '../lib/clerkDarkTheme.js'
import sesaLogo from '../assets/sesa-logo.png'

function SignInPage() {
  return (
    <div className="auth-dark-page">
      <div className="auth-dark-layout">
        <div className="auth-dark-left">
          <img className="auth-dark-logo" src={sesaLogo} alt="SESA Mobility" />
          <div className="auth-dark-header">
            <h2>Iniciar Sesión</h2>
            <p>Accede con tus credenciales corporativas</p>
          </div>
        </div>
        <SignIn
          path={clerkUrls.signIn}
          routing="path"
          signUpUrl={clerkUrls.signUp}
          fallbackRedirectUrl={clerkUrls.signInFallback}
          appearance={clerkDarkTheme}
        />
      </div>
      <p className="auth-dark-copyright">© 2026 Grupo SESA - Todos los derechos reservados</p>
    </div>
  )
}

export default SignInPage
