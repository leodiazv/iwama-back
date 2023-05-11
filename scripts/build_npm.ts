import { build, emptyDir } from "https://deno.land/x/dnt@0.32.1/mod.ts";

await emptyDir("./dist");

await build({
  entryPoints: ["./server/router.ts"],
  outDir: "./dist",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  compilerOptions: {
    lib: ["es2021", "dom"],
  },
  package: {
    name: "iwama-api-types",
    version: "0.0.1",
    description: "IWAMA API type declarations",
    publishConfig: {
      "@leodiazv:registry": "https://npm.pkg.github.com",
    },
    main: "types/server/router.d.ts",
    files: ["types"],
    dependencies: {
      "@trpc/server": "^10.25.1",
    },
  },
  importMap: "./import_map_build.json",
  scriptModule: false,
  test: false,
  typeCheck: false,
});
