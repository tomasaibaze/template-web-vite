import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react'

function HomePage() {
  const { user } = useUser()

  return (
    <section className="hero-layout">
      <div className="hero-copy">
        <p className="eyebrow">Clerk authentication for the Vite app</p>
        <h1>Sign in, sign up and protected dashboard, now inside `sesa-web`.</h1>
        <p className="hero-text">
          This project now reuses the same Clerk instance from `Sesa-web-app`
          and protects access to the dashboard route.
        </p>

        <div className="hero-actions">
          <SignedOut>
            <Link className="button button--primary" to="/sign-in">
              Open sign in
            </Link>
            <Link className="button button--ghost" to="/sign-up">
              Create account
            </Link>
          </SignedOut>

          <SignedIn>
            <Link className="button button--primary" to="/dashboard">
              Continue to dashboard
            </Link>
            <p className="signed-message">
              Signed in as {user?.primaryEmailAddress?.emailAddress || 'user'}.
            </p>
          </SignedIn>
        </div>
      </div>

      <div className="hero-panel">
        <div className="info-card">
          <span className="info-card__label">Routes enabled</span>
          <ul className="route-list">
            <li>`/sign-in` with Clerk component</li>
            <li>`/sign-up` with Clerk component</li>
            <li>`/dashboard` behind a protected route</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomePage
