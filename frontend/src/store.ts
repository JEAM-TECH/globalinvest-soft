import { create } from 'zustand';

interface UserState {
  isAuthenticated: boolean;
  user: { id: string; email: string; role: string } | null;
  login: (user: UserState['user']) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set: any) => ({
  isAuthenticated: false,
  user: null,
  login: (user: UserState['user']) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
