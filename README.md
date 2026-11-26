# PackForAI MCP server

[![ibrtokmecheng/packforai-mcp MCP server](https://glama.ai/mcp/servers/ibrtokmecheng/packforai-mcp/badges/score.svg)](https://glama.ai/mcp/servers/ibrtokmecheng/packforai-mcp)

Convert **PDF, DOCX, PPTX, XLSX, CSV and JSON** into clean, compact, AI-ready Markdown, directly inside Claude, Cursor and any other MCP client. Powered by [PackForAI](https://packforai.com).

Instead of pasting a messy PDF into your AI (broken text, lost tables, wasted tokens), ask your assistant to convert it first: it returns Markdown with a token comparison so you can see whether the output is larger or smaller.

## What you need

- **Node.js 18+**
- A **PackForAI API key**. Every plan includes API access, the free plan too (3 conversions a day, files up to 10 MB). Create a key at [packforai.com/account](https://packforai.com/account) after signing in.

## Install

The server runs via `npx`, so there is nothing to install globally. Add it to your MCP client's config.

### Claude Desktop

Edit `claude_desktop_config.json` (Settings → Developer → Edit Config) and add:

```json
{
  "mcpServers": {
    "packforai": {
      "command": "npx",
      "args": ["-y", "packforai-mcp"],
      "env": { "PACKFORAI_API_KEY": "your_key_here" }
    }
  }
}
```

Restart Claude Desktop.

### Cursor

This repository is also a Cursor plugin (`.cursor-plugin/plugin.json` and `mcp.json`): install it as a plugin and set `PACKFORAI_API_KEY` in the plugin's configuration. Or add the server to your MCP config by hand:


Add to `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global):

```json
{
  "mcpServers": {
    "packforai": {
      "command": "npx",
      "args": ["-y", "packforai-mcp"],
      "env": { "PACKFORAI_API_KEY": "your_key_here" }
    }
  }
}
```

## Usage

Once connected, just ask your assistant, for example:

- "Convert `~/Downloads/Q4-report.pdf` to clean Markdown."
- "Fetch `https://example.com/spec.docx` and give me the AI-ready version."
- "Convert this scanned PDF with OCR: `/path/to/scan.pdf`."

### Tool

**`convert_document`**

| Param | Type | Description |
|-------|------|-------------|
| `path` | string | Absolute path to a local document file. |
| `url` | string | Public https URL of a document to fetch and convert. |
| `ocr` | boolean | Force OCR for scanned / image-only PDFs (paid plans: Pro, Scale, Day Pass). Default `false`. |
| `full` | boolean | Return the full `document.md` (e.g. complete spreadsheet tables) instead of the compact version. Default `false`. |

Provide either `path` or `url`. Returns the Markdown plus a token comparison.

## Config

- `PACKFORAI_API_KEY` (required) — your PackForAI API key.
- `PACKFORAI_BASE_URL` (optional) — override the API base (defaults to `https://packforai.com/api/v1`).

## Links

- Website: [packforai.com](https://packforai.com)
- API docs: [packforai.com/docs](https://packforai.com/docs)

## License

MIT
