import Login from '@/pages/auth/components/Login'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/auth/login')({
  component: Login,
})

