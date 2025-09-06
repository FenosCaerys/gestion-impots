export const SESSION_MAX_AGE = 30 * 24 * 60 * 60 // 30 days

export const authRoutes = {
  signIn: ["/sign-in", "/login", "/signin"],
  signUp: ["/sign-up", "/register", "/signup"],
  redirectAfterSignIn: "/dashboard/idees",
  redirectOnUnhauthorized: "/sign-in",
}

export const minPasswordLength = 8
export const maxPasswordLength = 25
