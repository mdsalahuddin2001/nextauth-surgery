/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"];
/**
 * An array of routes that are for the authencication
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];
/**
 * api authencication prefix
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";
/**
 * Default login redirect
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
