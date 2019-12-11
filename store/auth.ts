import create from 'zustand'
import { User } from 'lib/api-graphql'

const [useAuthUser, authUser] = create(set => ({
  user: null,
  setUser: (user: User) => set(() => ({ user })),
  reset: () => set({ count: null })
}))

export { useAuthUser, authUser }
