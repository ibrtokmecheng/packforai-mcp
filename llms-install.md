# Installing the PackForAI MCP server

These steps are for AI agents (such as Cline) that set up MCP servers for a user.

1. The server needs a PackForAI API key. Ask the user for one. If they do not have one, tell them to sign in at
   https://packforai.com/account and press "Create API key". Every plan includes API access; the free plan allows
   3 conversions a day with files up to 10 MB.
2. Node.js 18 or newer must be installed. Nothing else is installed: the server runs with `npx`.
3. Add this entry to the MCP settings file (for Cline: `cline_mcp_settings.json`), with the user's key:

```json
{
  "mcpServers": {
    "packforai": {
      "command": "npx",
      "args": ["-y", "packforai-mcp"],
      "env": { "PACKFORAI_API_KEY": "<the user's key>" }
    }
  }
}
```

4. Check the server: it offers one tool, `convert_document`. Call it with a public document URL, for example
   `{"url": "https://www.irs.gov/pub/irs-pdf/fw9.pdf"}`. It returns compact Markdown and token counts.
   A 401 error means the key is wrong or revoked; a 429 error means the plan's daily limit is reached.
