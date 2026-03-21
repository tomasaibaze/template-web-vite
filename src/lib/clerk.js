const env = import.meta.env

export const clerkPublishableKey = env.VITE_CLERK_PUBLISHABLE_KEY || ''

export const clerkUrls = {
  signIn: env.VITE_CLERK_SIGN_IN_URL || '/sign-in',
  signUp: env.VITE_CLERK_SIGN_UP_URL || '/sign-up',
  signInFallback: env.VITE_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL || '/',
  signUpFallback: env.VITE_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL || '/',
}

export function assertClerkEnv() {
  if (!clerkPublishableKey) {
    throw new Error(
      'Missing Clerk publishable key. Set VITE_CLERK_PUBLISHABLE_KEY in sesa-web/.env.',
    )
  }
}
