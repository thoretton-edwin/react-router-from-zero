import {
    type RouteConfig,
    route,
} from "@react-router/dev/routes";

export default [
    route("/", "./pages/main.tsx"),
    // pattern ^           ^ module file
] satisfies RouteConfig;