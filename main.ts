import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "I vacuumed the spot twice. The spot vacuumed back. We have agreed to a ceasefire until Thursday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
