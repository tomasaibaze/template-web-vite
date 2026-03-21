import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import SignInPage from './pages/SignInPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import './App.css'

function App() {
  return (
    <div className="shell">
      <header className="topbar">
        <NavLink className="brand" to="/">
          <span className="brand-mark">S</span>
          <span>Sesa</span>
        </NavLink>

        <nav className="topbar-nav">
          <SignedOut>
            <NavLink className="nav-link" to="/sign-in">
              Sign in
            </NavLink>
            <NavLink className="nav-link nav-link--primary" to="/sign-up">
              Sign up
            </NavLink>
          </SignedOut>
          <SignedIn>
            <NavLink className="nav-link" to="/">
              Dashboard
            </NavLink>
            <div className="user-chip">
              <UserButton afterSignOutUrl="/sign-in" />
            </div>
          </SignedIn>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/sign-in/*" element={<SignInPage />} />
          <Route path="/sign-up/*" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
