import React, { useContext, useEffect, useState, type ReactNode } from "react";

type ThemeNameType = "light" | "dark";

interface ThemeContextType {
  themeName: ThemeNameType;
  toggleTheme: () => void;
}

export const ThemeContextProvider = ({children} : {children: ReactNode}) => {
    const [themeName, setThemeName] = useState<ThemeNameType>(
        localStorage.getItem("theme") as ThemeNameType || "light"
    );
    
    const toggleTheme = () => {
        setThemeName((prev) => (prev === "light" ? "dark" : "light"));
    }
    
    useEffect(() => {
        localStorage.setItem("theme", themeName);
    }, [themeName]);
    
    return (
        <ThemeContext value={{themeName, toggleTheme}}>
            {children}
        </ThemeContext>
    )
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw Error("theme error");
    return context;
};