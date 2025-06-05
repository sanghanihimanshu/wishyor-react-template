import AuthLayout from '@/pages/auth/AuthLayout'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/auth')({
  component: AuthLayout,
})