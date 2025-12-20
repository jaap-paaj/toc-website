/**
 * Common type definitions for the Landal AI Content Studio
 */

export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
}

export enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    VIEWER = "viewer",
}

export interface Content {
    id: string;
    title: string;
    body: string;
    status: ContentStatus;
    authorId: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
}

export enum ContentStatus {
    DRAFT = "draft",
    REVIEW = "review",
    PUBLISHED = "published",
    ARCHIVED = "archived",
}

export interface Project {
    id: string;
    name: string;
    description: string;
    ownerId: string;
    members: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasMore: boolean;
}

export interface FilterOptions {
    search?: string;
    status?: ContentStatus;
    tags?: string[];
    dateFrom?: Date;
    dateTo?: Date;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}
