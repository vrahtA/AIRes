import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("/auth", 'routes/auth.tsx'),
    route("/upload", 'routes/uploads.tsx'),
] satisfies RouteConfig;
