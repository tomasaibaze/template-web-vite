import { RedirectToSignIn, useAuth } from '@clerk/clerk-react'

function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) {
    return (
      <section className="auth-shell auth-shell--centered">
        <div className="loading-card">
          <div className="loading-spinner" />
          <p>Checking your session...</p>
        </div>
      </section>
    )
  }

  if (!isSignedIn) {
    return <RedirectToSignIn redirectUrl="/" />
  }

  return children
}

export default ProtectedRoute
