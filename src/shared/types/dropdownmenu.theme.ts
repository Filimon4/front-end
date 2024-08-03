import { createContext } from "react";

export const DropdownTheme = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | null>(null);
