const env = import.meta.env

export const clerkPublishableKey =
  env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || env.VITE_CLERK_PUBLISHABLE_KEY || ''

export const clerkUrls = {
  signIn: env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || '/sign-in',
  signUp: env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || '/sign-up',
  signInFallback:
    env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL || '/',
  signUpFallback:
    env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL || '/',
}

export function assertClerkEnv() {
  if (!clerkPublishableKey) {
    throw new Error(
      'Missing Clerk publishable key. Set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY in sesa-web/.env.',
    )
  }
}
