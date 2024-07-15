const CHUNK_PUBLIC_PATH = "server/app/profile/[id]/page.js";
const runtime = require("../../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__eb23a3._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_7eb7ea._.js");
runtime.loadChunk("server/chunks/ssr/_dbdbb8._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@clerk_backend_dist_d99617._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_1db978._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/profile/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions/invalidateCache.js [app-rsc] (ecmascript, action, ecmascript)\" } [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/profile/[id]/page { COMPONENT_0 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_1 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_2 => \"[project]/src/app/profile/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <facade>", CHUNK_PUBLIC_PATH).exports;
