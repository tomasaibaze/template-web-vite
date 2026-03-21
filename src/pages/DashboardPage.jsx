import { useEffect, useState } from 'react'
import { useAuth, useUser } from '@clerk/clerk-react'
import { getCurrentUser } from '../lib/api.js'

function DashboardPage() {
  const { user, isLoaded } = useUser()
  const { getToken } = useAuth()
  const [backendUser, setBackendUser] = useState(null)
  const [syncStatus, setSyncStatus] = useState('idle')
  const [syncError, setSyncError] = useState('')

  useEffect(() => {
    if (!isLoaded || !user) {
      return
    }

    let cancelled = false

    async function syncBackendUser() {
      try {
        setSyncStatus('loading')
        setSyncError('')

        const token = await getToken()

        if (!token) {
          throw new Error('Clerk did not return a session token')
        }

        const payload = await getCurrentUser(token)

        if (!cancelled) {
          setBackendUser(payload.user)
          setSyncStatus('success')
        }
      } catch (error) {
        if (!cancelled) {
          setSyncError(error.message)
          setSyncStatus('error')
        }
      }
    }

    syncBackendUser()

    return () => {
      cancelled = true
    }
  }, [getToken, isLoaded, user])

  return (
    <section className="dashboard-layout">
      <div className="dashboard-hero">
        <p className="eyebrow">Protected area</p>
        <h1>
          Hello {user?.firstName || user?.username || 'there'}, your session is
          active.
        </h1>
        <p className="hero-text">
          This route only renders for authenticated users, gets a Clerk session
          token, and syncs the authenticated user against the API.
        </p>
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card">
          <span className="dashboard-card__label">Full name</span>
          <strong>{user?.fullName || 'Not provided'}</strong>
        </article>

        <article className="dashboard-card">
          <span className="dashboard-card__label">Primary email</span>
          <strong>{user?.primaryEmailAddress?.emailAddress || 'Not provided'}</strong>
        </article>

        <article className="dashboard-card">
          <span className="dashboard-card__label">Member since</span>
          <strong>
            {user?.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : 'Today'}
          </strong>
        </article>

        <article className="dashboard-card">
          <span className="dashboard-card__label">API sync status</span>
          <strong>
            {syncStatus === 'loading' && 'Syncing user...'}
            {syncStatus === 'success' && 'Authenticated with backend'}
            {syncStatus === 'error' && 'Backend sync failed'}
            {syncStatus === 'idle' && 'Pending'}
          </strong>
        </article>

        <article className="dashboard-card">
          <span className="dashboard-card__label">Mongo role</span>
          <strong>{backendUser?.role || 'Not loaded yet'}</strong>
        </article>

        <article className="dashboard-card">
          <span className="dashboard-card__label">Mongo user id</span>
          <strong>{backendUser?._id || 'Not loaded yet'}</strong>
        </article>
      </div>

      {syncError ? (
        <p className="dashboard-error">
          Backend auth check failed: {syncError}
        </p>
      ) : null}
    </section>
  )
}

export default DashboardPage
