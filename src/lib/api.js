const env = import.meta.env

const apiBaseUrl = (env.VITE_API_URL || 'http://localhost:4004').replace(
  /\/$/,
  '',
)

async function apiRequest(path, options = {}) {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  })

  const payload = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(payload?.message || 'API request failed')
  }

  return payload
}

export function getCurrentUser(token) {
  return apiRequest('/api/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
