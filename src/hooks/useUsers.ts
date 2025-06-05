
export const USER_QUERY_KEYS = {
  all: ['users'] as const,
  lists: () => [...USER_QUERY_KEYS.all, 'list'] as const,
  list: (filters: any) => [...USER_QUERY_KEYS.lists(), filters] as const,
  details: () => [...USER_QUERY_KEYS.all, 'detail'] as const,
  detail: (id: string) => [...USER_QUERY_KEYS.details(), id] as const,
  search: (query: string) => [...USER_QUERY_KEYS.all, 'search', query] as const,
  byRole: (role: string) => [...USER_QUERY_KEYS.all, 'role', role] as const,
};

// export const useUsers = (params?: any) => {
//   return useQuery({
//     queryKey: USER_QUERY_KEYS.list(params),
//     queryFn: () => userService.getAll(params),
//     staleTime: 5 * 60 * 1000, // 5 minutes
//   });
// };

// export const useUser = (id: string, enabled = true) => {
//   return useQuery({
//     queryKey: USER_QUERY_KEYS.detail(id),
//     queryFn: () => userService.getById(id),
//     enabled: enabled && !!id,
//     staleTime: 5 * 60 * 1000,
//   });
// };

// export const useUsersByRole = (role: string) => {
//   return useQuery({
//     queryKey: USER_QUERY_KEYS.byRole(role),
//     queryFn: () => userService.getUsersByRole(role),
//     enabled: !!role,
//     staleTime: 5 * 60 * 1000,
//   });
// };

// export const useSearchUsers = (query: string, enabled = true) => {
//   return useQuery({
//     queryKey: USER_QUERY_KEYS.search(query),
//     queryFn: () => userService.searchUsers(query),
//     enabled: enabled && query.length > 2,
//     staleTime: 2 * 60 * 1000, // 2 minutes for search
//   });
// };

// export const useCreateUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (data: CreateUser) => userService.create(data),
//     onSuccess: (newUser) => {
//       // Invalidate and refetch user lists
//       queryClient.invalidateQueries({ queryKey: USER_QUERY_KEYS.lists() });
      
//       // Add the new user to the cache
//       queryClient.setQueryData(
//         USER_QUERY_KEYS.detail(newUser.id),
//         newUser
//       );
//     },
//   });
// };

// export const useUpdateUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: ({ id, data }: { id: string; data: UpdateUser }) =>
//       userService.update(id, data),
//     onSuccess: (updatedUser) => {
//       // Update the specific user in cache
//       queryClient.setQueryData(
//         USER_QUERY_KEYS.detail(updatedUser.id),
//         updatedUser
//       );
      
//       // Invalidate lists to ensure consistency
//       queryClient.invalidateQueries({ queryKey: USER_QUERY_KEYS.lists() });
//     },
//   });
// };

// export const useDeleteUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (id: string) => userService.delete(id),
//     onSuccess: (_, deletedId) => {
//       // Remove from cache
//       queryClient.removeQueries({ queryKey: USER_QUERY_KEYS.detail(deletedId) });
      
//       // Invalidate lists
//       queryClient.invalidateQueries({ queryKey: USER_QUERY_KEYS.lists() });
//     },
//   });
// };

// export const useActivateUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (id: string) => userService.activateUser(id),
//     onSuccess: (updatedUser) => {
//       queryClient.setQueryData(
//         USER_QUERY_KEYS.detail(updatedUser.id),
//         updatedUser
//       );
//       queryClient.invalidateQueries({ queryKey: USER_QUERY_KEYS.lists() });
//     },
//   });
// };

// export const useDeactivateUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (id: string) => userService.deactivateUser(id),
//     onSuccess: (updatedUser) => {
//       queryClient.setQueryData(
//         USER_QUERY_KEYS.detail(updatedUser.id),
//         updatedUser
//       );
//       queryClient.invalidateQueries({ queryKey: USER_QUERY_KEYS.lists() });
//     },
//   });
// };