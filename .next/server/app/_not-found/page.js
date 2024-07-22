const CHUNK_PUBLIC_PATH = "server/app/_not-found/page.js";
const runtime = require("../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_6a0143._.js");
runtime.loadChunk("server/chunks/ssr/_5343f7._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@clerk_backend_dist_6891da._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_1db978._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__7d38f9._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/_not-found/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions/invalidateCache.js [app-rsc] (ecmascript, action, ecmascript)\" } [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/_not-found/page { COMPONENT_0 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_1 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <facade>", CHUNK_PUBLIC_PATH).exports;
