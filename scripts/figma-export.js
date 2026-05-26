const fs = require("fs");
const path = require("path");

async function main() {
  const PAT = process.env.FIGMA_PAT;
  const FILE_KEY = process.env.FILE_KEY;
  const NODE_IDS = process.env.NODE_IDS;
  const NAMES = process.env.NAMES;
  const FORMAT = process.env.FORMAT || "png";
  const SCALE = process.env.SCALE || "2";

  if (!PAT || !FILE_KEY || !NODE_IDS || !NAMES) {
    console.error("Missing environment variables. Example:");
    console.error(
      'FIGMA_PAT=figd_xxx FILE_KEY=Y46pO9nkHPbRoxpOoJ1qke NODE_IDS="2001:153,2001:154,2001:155,2001:156" NAMES="profile,project1,project2,og" node scripts/figma-export.js',
    );
    process.exit(1);
  }

  const ids = NODE_IDS.split(",").map((item) => item.trim());
  const names = NAMES.split(",").map((item) => item.trim());
  if (ids.length !== names.length) {
    console.error("NODE_IDS and NAMES must have the same number of values.");
    process.exit(1);
  }

  const apiUrl = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${ids.join(",")}&format=${FORMAT}&scale=${SCALE}`;
  const res = await fetch(apiUrl, { headers: { "X-Figma-Token": PAT } });

  if (!res.ok) {
    console.error("Figma API request failed:", res.status, await res.text());
    process.exit(1);
  }

  const data = await res.json();
  if (!data.images) {
    console.error("No image URLs returned from Figma API:", data);
    process.exit(1);
  }

  const outDir = path.join(process.cwd(), "public", "images");
  fs.mkdirSync(outDir, { recursive: true });

  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const name = names[i];
    const imageUrl = data.images[id];

    if (!imageUrl) {
      console.warn(`Skipping ${id}: no URL returned`);
      continue;
    }

    const imageRes = await fetch(imageUrl);
    if (!imageRes.ok) {
      console.error(`Failed to download ${imageUrl}:`, imageRes.status);
      continue;
    }

    const buffer = Buffer.from(await imageRes.arrayBuffer());
    const filename = `${name}.${FORMAT}`;
    fs.writeFileSync(path.join(outDir, filename), buffer);
    console.log(`Saved public/images/${filename}`);
  }

  console.log(
    "Done. Verify the exported files in public/images/ and then tell me to integrate them.",
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
