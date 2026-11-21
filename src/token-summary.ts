export type TokenSummary = {
  original?: number | null; compact?: number | null; savingsPercent?: number | null;
  actualOriginal?: number | null; actualCompact?: number | null; sizeChangePercent?: number | null;
};
export function formatTokenSummary(tokens?: TokenSummary | null) {
  if (!tokens) return null;
  if (typeof tokens.actualOriginal === "number" && typeof tokens.actualCompact === "number") {
    const n = tokens.sizeChangePercent;
    const change = typeof n !== "number" ? "comparison unavailable" : n === 0
      ? "no change" : `${Math.abs(n)}% ${n > 0 ? "more" : "fewer"}`;
    return `${tokens.actualOriginal} to ${tokens.actualCompact} tokens (${change})`;
  }
  if (typeof tokens.original !== "number" || typeof tokens.compact !== "number") return null;
  return `${tokens.original} to ${tokens.compact} tokens (legacy estimate)`;
}
