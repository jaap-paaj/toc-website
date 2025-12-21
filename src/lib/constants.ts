/**
 * Application-wide constants
 */

export const APP_NAME = "TOC AI Content Studio";
export const APP_VERSION = "1.0.0";
export const APP_DESCRIPTION = "Enterprise-grade AI-powered content creation and management platform";

/**
 * Brand colors
 */
export const COLORS = {
    PRIMARY: "#0097A2",
    PRIMARY_HOVER: "#007F88",
    PRIMARY_LIGHT: "#00B8C5",
    PRIMARY_DARK: "#006670",
    BACKGROUND: "#F6F1DE",
    ACCENT: "#FF6B35",
    SUCCESS: "#10B981",
    WARNING: "#F59E0B",
    ERROR: "#EF4444",
} as const;

/**
 * API endpoints
 */
export const API_ROUTES = {
    CONTENT: "/api/content",
    USERS: "/api/users",
    PROJECTS: "/api/projects",
    AUTH: "/api/auth",
} as const;

/**
 * Pagination defaults
 */
export const PAGINATION = {
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100,
} as const;

/**
 * Content limits
 */
export const LIMITS = {
    TITLE_MAX_LENGTH: 200,
    DESCRIPTION_MAX_LENGTH: 500,
    CONTENT_MAX_LENGTH: 50000,
    TAGS_MAX_COUNT: 10,
} as const;

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
    USER_PREFERENCES: "toc_user_preferences",
    THEME: "toc_theme",
    RECENT_PROJECTS: "toc_recent_projects",
} as const;
