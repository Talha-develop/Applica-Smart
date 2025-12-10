// API endpoint routes
export const API_ROUTES = {
  // Auth routes
  SIGNUP: "/auth/signup",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  VERIFY_EMAIL: "/auth/verify-email",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  REFRESH_TOKEN: "/auth/refresh-token",
  
  // User routes
  GET_PROFILE: "/user/profile",
  UPDATE_PROFILE: "/user/profile",
  UPDATE_PASSWORD: "/user/password",
  
  // Education routes
  GET_EDUCATION: "/user/education",
  ADD_EDUCATION: "/user/education",
  UPDATE_EDUCATION: (id: string) => `/user/education/${id}`,
  DELETE_EDUCATION: (id: string) => `/user/education/${id}`,
  
  // Skills routes
  GET_SKILLS: "/user/skills",
  ADD_SKILLS: "/user/skills",
  DELETE_SKILL: (id: string) => `/user/skills/${id}`,
  
  // Experience routes
  GET_EXPERIENCE: "/user/experience",
  ADD_EXPERIENCE: "/user/experience",
  UPDATE_EXPERIENCE: (id: string) => `/user/experience/${id}`,
  DELETE_EXPERIENCE: (id: string) => `/user/experience/${id}`,
  
  // Job Application routes
  GET_APPLICATIONS: "/applications",
  GET_APPLICATION: (id: string) => `/applications/${id}`,
  START_AUTO_APPLY: "/applications/auto-apply/start",
  STOP_AUTO_APPLY: "/applications/auto-apply/stop",
  GET_AUTO_APPLY_STATUS: "/applications/auto-apply/status",
};

export default API_ROUTES;
