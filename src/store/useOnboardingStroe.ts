import { Animated } from "react-native";
import { create } from "zustand";

interface OnboardingStore {
  scrollX: Animated.Value;
  setScrollX: (value: Animated.Value) => void;
}

const useOnboardingStore = create<OnboardingStore>((set) => ({
  scrollX: new Animated.Value(0),
  setScrollX: (value) => set({ scrollX: value }),
}));

export default useOnboardingStore;
