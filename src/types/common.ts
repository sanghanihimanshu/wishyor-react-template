import { z } from 'zod';

export const PaginationSchema = z.object({
  page: z.number().min(1),
  limit: z.number().min(1).max(100),
  total: z.number(),
  totalPages: z.number(),
});

export const ApiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  timestamp: z.string(),
});

export const ErrorResponseSchema = ApiResponseSchema.extend({
  error: z.object({
    code: z.string(),
    details: z.any().optional(),
  }),
});

export type Pagination = z.infer<typeof PaginationSchema>;
export type ApiResponse = z.infer<typeof ApiResponseSchema>;
export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;