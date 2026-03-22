import { SignUp } from '@clerk/clerk-react'
import { clerkUrls } from '../lib/clerk.js'
import { clerkDarkTheme } from '../lib/clerkDarkTheme.js'
import sesaLogo from '../assets/sesa-logo.png'

function SignUpPage() {
  return (
    <div className="auth-dark-page">
      <div className="auth-dark-layout">
        <div className="auth-dark-left">
          <img className="auth-dark-logo" src={sesaLogo} alt="SESA Mobility" />
          <div className="auth-dark-header">
            <h2>Crear Cuenta</h2>
            <p>Completa tu información para acceder al sistema</p>
          </div>
        </div>
        <SignUp
          path={clerkUrls.signUp}
          routing="path"
          signInUrl={clerkUrls.signIn}
          fallbackRedirectUrl={clerkUrls.signUpFallback}
          appearance={clerkDarkTheme}
        />
      </div>
      <p className="auth-dark-copyright">© 2026 Grupo SESA - Todos los derechos reservados</p>
    </div>
  );
}

export default SignUpPage;
