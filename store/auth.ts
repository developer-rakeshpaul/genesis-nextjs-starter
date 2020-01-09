import create from 'zustand'
import { User } from 'lib/api-graphql'

const [useAuthUser, authUser] = create(set => ({
  user: null,
  setUser: (user: User) =>
    set(state => ({ user: { ...(state.user || {}), ...user } })),
  reset: () => set({ count: null }),
}))

export { useAuthUser, authUser }
