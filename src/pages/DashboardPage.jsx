import { useUser } from '@clerk/clerk-react'

function DashboardPage() {
  const { user } = useUser()

  return (
    <section className="dashboard-layout">
      <div className="dashboard-hero">
        <p className="eyebrow">Protected area</p>
        <h1>
          Hello {user?.firstName || user?.username || 'there'}, your session is
          active.
        </h1>
        <p className="hero-text">
          This route only renders for authenticated users and uses Clerk session
          state from the Vite app.
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
      </div>
    </section>
  )
}

export default DashboardPage
