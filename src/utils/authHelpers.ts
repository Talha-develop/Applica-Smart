// Auth helper functions for token and user management

export const setAuthToken = (token: string): void => {
  localStorage.setItem("authToken", token);
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem("authToken");
};

export const removeAuthToken = (): void => {
  localStorage.removeItem("authToken");
};

export const setUser = (user: object): void => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = (): object | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const removeUser = (): void => {
  localStorage.removeItem("user");
};

export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};

export const logout = (): void => {
  removeAuthToken();
  removeUser();
  window.location.href = "/login";
};

export const getUserId = (): string | null => {
  const user = getUser() as { id?: string } | null;
  return user?.id || null;
};

export const getUserEmail = (): string | null => {
  const user = getUser() as { email?: string } | null;
  return user?.email || null;
};

export const getUserName = (): string | null => {
  const user = getUser() as { fullName?: string; name?: string } | null;
  return user?.fullName || user?.name || null;
};
