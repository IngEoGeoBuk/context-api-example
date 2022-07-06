import { createContext } from "react";

interface LoginProps {
    username: string;
    onUsername: (v: string) => void;
    onShowProfile: (v: boolean) => void;
}

export const LoginContext = createContext<LoginProps>({} as LoginProps)