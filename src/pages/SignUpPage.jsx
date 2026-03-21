import { SignUp } from '@clerk/clerk-react'
import { clerkUrls } from '../lib/clerk.js'

function SignUpPage() {
  return (
    <section className="auth-shell">
      <div className="auth-panel">
        <p className="eyebrow">Create your access</p>
        <h1>Sign up and continue directly into the app.</h1>
        <p className="auth-text">
          The Vite frontend now shares the same Clerk tenant and routes as the
          Next app.
        </p>
      </div>

      <div className="auth-card">
        <SignUp
          path={clerkUrls.signUp}
          routing="path"
          signInUrl={clerkUrls.signIn}
          fallbackRedirectUrl={clerkUrls.signUpFallback}
        />
      </div>
    </section>
  )
}

export default SignUpPage
