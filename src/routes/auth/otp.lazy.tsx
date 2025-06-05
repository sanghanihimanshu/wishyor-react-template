import Otp from '@/pages/auth/components/Otp'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/auth/otp')({
  component: Otp,  
})
