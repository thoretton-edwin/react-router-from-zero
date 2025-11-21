import { createRoutesStub } from "react-router";
import {
    render,
    screen,
} from "@testing-library/react";
import DefaultHome from "~/pages/main";

test("Home page render new button", async () => {
    const Stub = createRoutesStub([
        {
            path: "/",
            Component: DefaultHome,
        },
    ]);

    // render the app stub at "/login"
    render(<Stub initialEntries={["/"]} />);

    expect(screen.queryByText(/Hello World/i)).toBeInTheDocument();
});
