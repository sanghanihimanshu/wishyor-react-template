import { createRootRouteWithContext, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import type { QueryClient } from '@tanstack/react-query'

import TanStackQueryLayout from '@/integrations/tanstack-query/layout.tsx'
import PageContainer from '@/pages/PageContainer'


interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <PageContainer />
      <TanStackRouterDevtools />
      <TanStackQueryLayout />
    </>
  ),
})