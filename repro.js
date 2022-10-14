import * as rollup from "rollup";
import url from "node:url";
import path from "node:path";

const cwd = url.fileURLToPath(new URL("./", import.meta.url));

async function main() {
  const rb = await rollup.rollup({
    input: [
      path.join(cwd, "src/main.js"),
    ],
  });

  // hanging here
  await rb.write({
    dir: path.join(cwd, "dist"),
    format: "esm",
    sourcemap: true,
  });
}

main();
