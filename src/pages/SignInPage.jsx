import { SignIn } from '@clerk/clerk-react'
import { clerkUrls } from '../lib/clerk.js'

function SignInPage() {
  return (
    <section className="auth-shell">
      <div className="auth-panel">
        <p className="eyebrow">Welcome back</p>
        <h1>Sign in to reach your protected dashboard.</h1>
        <p className="auth-text">
          This flow is powered by the same Clerk configuration already used in
          `Sesa-web-app`.
        </p>
      </div>

      <div className="auth-card">
        <SignIn
          path={clerkUrls.signIn}
          routing="path"
          signUpUrl={clerkUrls.signUp}
          fallbackRedirectUrl={clerkUrls.signInFallback}
        />
      </div>
    </section>
  )
}

export default SignInPage
