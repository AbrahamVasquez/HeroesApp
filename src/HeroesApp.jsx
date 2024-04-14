import { AuthContext } from "./auth/context/AuthContext";
import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
  )
}
