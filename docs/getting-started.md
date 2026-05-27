# Getting Started

This guide walks you through installing and configuring the Apitomy Data Models MCP server
with your AI coding assistant.

## Prerequisites

- **Node.js** 18 or later
- An MCP-compatible AI coding assistant (e.g., Claude Code, Cursor, Windsurf)

## Installation

### Option 1: Run with npx (no install)

The simplest way — no global installation required:

```bash
npx @apitomy/data-models-mcp
```

### Option 2: Global install

```bash
npm install -g @apitomy/data-models-mcp
```

Then run with:

```bash
apitomy-data-models-mcp
```

## Configuration

### Claude Code

Add the MCP server to your Claude Code settings. Create or edit `.claude/settings.json`:

```json
{
  "mcpServers": {
    "apitomy-data-models": {
      "command": "npx",
      "args": ["-y", "@apitomy/data-models-mcp"]
    }
  }
}
```

### Cursor

Add to your Cursor MCP configuration (`.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "apitomy-data-models": {
      "command": "npx",
      "args": ["-y", "@apitomy/data-models-mcp"]
    }
  }
}
```

### VS Code (Copilot)

Add to your VS Code settings (`.vscode/settings.json`):

```json
{
  "mcp.servers": {
    "apitomy-data-models": {
      "command": "npx",
      "args": ["-y", "@apitomy/data-models-mcp"]
    }
  }
}
```

## Verifying the Setup

Once configured, ask your AI assistant to test the connection:

> "Create a new OpenAPI 3.1 document called 'test' with title 'My API'"

The assistant should use the `document_create` tool to create the document and confirm it was
created successfully.

## Basic Workflow

Here's a typical workflow for creating an API specification:

### 1. Create a document

> "Create a new OpenAPI 3.1 document called 'petstore' with title 'Petstore API' version '1.0.0'"

### 2. Add paths and operations

> "Add a GET /pets operation that returns a list of pets"

### 3. Add schemas

> "Add a Pet schema with id (integer), name (string), and status (string) properties"

### 4. Validate

> "Validate the petstore document"

### 5. Export

> "Export the petstore document as YAML"

## Loading an Existing Document

You can also load an existing OpenAPI or AsyncAPI document:

> "Load the file openapi.json into a session called 'myapi'"

The MCP server will parse the document and make it available for querying and editing.

## Next Steps

- [Tools Reference](user-guide/index.md) — Complete reference for all 102 MCP tools
