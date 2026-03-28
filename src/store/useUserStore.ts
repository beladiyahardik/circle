import { createPersistStore } from './persist-wrapper';

interface UserState {
  user: any;
  updateUser: () => void;
}

export const useUserStore = createPersistStore<UserState>(
  'user-storage',
  (set: any) => ({
    user: null,
    updateUser: () => set((state: any) => ({ user: state.user })),
  }),
);
