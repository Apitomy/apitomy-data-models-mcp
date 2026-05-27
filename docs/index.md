# Apitomy Data Models MCP

An [MCP](https://modelcontextprotocol.io/) (Model Context Protocol) server that wraps the
[Apitomy Data Models](https://www.apitomy.io/projects/data-models/) library, enabling AI coding
assistants to create, query, edit, validate, and transform OpenAPI and AsyncAPI documents.

## Key Features

- **102 MCP Tools** — comprehensive coverage for session management, querying, editing,
  validation, and format transformation
- **Session-Based** — manage multiple documents simultaneously through named sessions
- **AI-Powered Editing** — let AI assistants like Claude create and modify API specifications
  through natural language
- **Multi-Format** — load and save documents in JSON or YAML, convert between formats and
  spec versions
- **Real-Time Validation** — validate documents against the OpenAPI or AsyncAPI specification

## Quick Links

- [Getting Started](getting-started.md) — Installation and setup for Claude Code and other
  MCP clients
- [Tools Reference](user-guide/index.md) — Complete reference for all 102 MCP tools
- [GitHub Repository](https://github.com/Apitomy/apitomy-data-models-mcp) — Source code and
  issues
- [npm Package](https://www.npmjs.com/package/@apitomy/data-models-mcp) — Published releases

## How It Works

The MCP server manages OpenAPI and AsyncAPI documents through **sessions**. Each session holds
a parsed document that can be queried and edited using the MCP tools. The workflow is:

1. **Load or create** a document in a named session
2. **Query** the document structure (paths, schemas, operations, etc.)
3. **Edit** the document (add paths, schemas, parameters, responses, etc.)
4. **Validate** the document against the specification
5. **Export or save** the document back to JSON or YAML

All operations use the [Apitomy Data Models](https://www.apitomy.io/projects/data-models/)
visitor and command patterns under the hood, ensuring correct document manipulation.

## Tool Categories

| Category | Count | Description |
|----------|-------|-------------|
| Session | 7 | Load, create, save, close, list, export, clone sessions |
| Query | 16 | Get info, list paths, schemas, operations, parameters, etc. |
| Edit | 76 | Add, remove, update paths, schemas, operations, and more |
| Validation | 1 | Validate documents against spec rules |
| Transform | 2 | Convert between spec versions and dereference `$ref`s |

## Community

All Apitomy projects are open source under the Apache License 2.0. We welcome contributions,
feedback, and ideas.

- **Issues**: Report bugs and request features on
  [GitHub Issues](https://github.com/Apitomy/apitomy-data-models-mcp/issues)
- **Contributing**: See the
  [Contributing Guide](https://github.com/Apitomy/apitomy-data-models-mcp/blob/main/CONTRIBUTING.md)
