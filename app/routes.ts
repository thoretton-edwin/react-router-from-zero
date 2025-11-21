import {
    type RouteConfig,
    route, index,
} from "@react-router/dev/routes";

export default [
    index("./pages/main.tsx"),
    // pattern ^           ^ module file
] satisfies RouteConfig;