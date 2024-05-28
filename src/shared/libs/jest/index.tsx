import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../theme";
import '@shared/libs/i18n'

export const renderWithProviders = (child: ReactNode) => {
    return render(
        <ThemeProvider>
            <MemoryRouter>
                {child}
            </MemoryRouter>
        </ThemeProvider>
    )
}
