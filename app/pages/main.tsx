export async function loader() {
    return {
        message: "Hello world from the server!",
        element: <p>Element from the server!</p>,
    };
}

export default function Route({
                                  loaderData,
                              }: Route.ComponentProps) {
    return (
        <>
            <h1>{loaderData.message}</h1>
            {loaderData.element}
        </>
    );
}