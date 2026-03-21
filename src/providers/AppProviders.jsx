import { ClerkProvider } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import App from '../App.jsx'
import { clerkPublishableKey, clerkUrls } from '../lib/clerk.js'

function AppProviders() {
  const navigate = useNavigate()

  return (
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      signInUrl={clerkUrls.signIn}
      signUpUrl={clerkUrls.signUp}
      signInFallbackRedirectUrl={clerkUrls.signInFallback}
      signUpFallbackRedirectUrl={clerkUrls.signUpFallback}
      afterSignOutUrl={clerkUrls.signIn}
    >
      <App />
    </ClerkProvider>
  )
}

export default AppProviders
