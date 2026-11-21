import assert from "node:assert/strict";
import test from "node:test";
import { formatTokenSummary } from "./dist/token-summary.js";
test("formats actual growth, reduction, zero and legacy fallback", () => {
  assert.equal(formatTokenSummary({ original:80, compact:80, savingsPercent:0, actualOriginal:80, actualCompact:100, sizeChangePercent:25 }), "80 to 100 tokens (25% more)");
  assert.equal(formatTokenSummary({ actualOriginal:100, actualCompact:80, sizeChangePercent:-20 }), "100 to 80 tokens (20% fewer)");
  assert.equal(formatTokenSummary({ actualOriginal:0, actualCompact:8, sizeChangePercent:null }), "0 to 8 tokens (comparison unavailable)");
  assert.equal(formatTokenSummary({ original:80, compact:80, savingsPercent:0 }), "80 to 80 tokens (legacy estimate)");
  assert.equal(formatTokenSummary(null), null);
});
