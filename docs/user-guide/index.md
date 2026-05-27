# Tools Reference

The Apitomy Data Models MCP server provides 102 tools organized into five categories.

## Session Tools (7)

Manage document sessions — each session holds one parsed OpenAPI or AsyncAPI document.

| Tool | Description |
|------|-------------|
| `document_load` | Load an OpenAPI/AsyncAPI file into a named session |
| `document_create` | Create a new empty document in a named session |
| `document_save` | Save a session's document back to a file |
| `document_close` | Close a session and release the document |
| `document_list_sessions` | List all active sessions |
| `document_export` | Export a document as a JSON or YAML string |
| `document_clone_session` | Clone an existing session into a new one |

## Query Tools (16)

Read document structure without modifying it.

| Tool | Description |
|------|-------------|
| `document_get_info` | Get document overview (type, title, version, counts) |
| `document_list_paths` | List all paths/channels with their operations |
| `document_get_operation` | Get full details of a specific operation |
| `document_list_operations` | List all operations with path, method, operationId |
| `document_list_schemas` | List all schema definitions |
| `document_get_schema` | Get a specific schema definition with full content |
| `document_get_node` | Get any node by its node path |
| `document_list_security_schemes` | List all security scheme definitions |
| `document_list_servers` | List all server definitions |
| `document_list_tags` | List all tag definitions |
| `document_list_parameters` | List parameters on a path or operation |
| `document_list_responses` | List responses on a specific operation |
| `document_list_media_types` | List media types on a request body or response |
| `document_list_extensions` | List vendor extensions on a node |
| `document_list_examples` | List examples on a media type, parameter, or header |
| `document_find_refs` | Find all `$ref` references to a given definition |

## Edit Tools (76)

Modify document structure. All edits operate on the in-memory document model.

### Document Info

| Tool | Description |
|------|-------------|
| `document_set_info` | Set document title, description, and/or version |
| `document_set_contact` | Set contact information |
| `document_delete_contact` | Remove contact information |
| `document_set_license` | Set license information |
| `document_delete_license` | Remove license information |
| `document_set_external_docs` | Set external documentation on a node |

### Paths & Operations

| Tool | Description |
|------|-------------|
| `document_add_path` | Add a new path item |
| `document_remove_path` | Remove a path item |
| `document_rename_path` | Rename a path, preserving operations |
| `document_add_operation` | Add an HTTP operation to a path |
| `document_remove_operation` | Remove an operation |
| `document_copy_operation` | Copy an operation to another path/method |
| `document_move_operation` | Move an operation to another path/method |
| `document_set_operation_info` | Set operationId, summary, description, deprecated |
| `document_set_operation_tags` | Set the tags array on an operation |
| `document_remove_all_operations` | Remove all operations from a path |

### Parameters & Request Bodies

| Tool | Description |
|------|-------------|
| `document_add_parameter` | Add a parameter to a path or operation |
| `document_remove_parameter` | Remove a parameter |
| `document_remove_all_parameters` | Remove all parameters from a path or operation |
| `document_add_parameter_definition` | Add a reusable parameter definition |
| `document_remove_parameter_definition` | Remove a reusable parameter definition |
| `document_add_request_body` | Add a request body to an operation |
| `document_remove_request_body` | Remove a request body |
| `document_add_request_body_definition` | Add a reusable request body definition |
| `document_remove_request_body_definition` | Remove a reusable request body definition |

### Responses & Headers

| Tool | Description |
|------|-------------|
| `document_add_response` | Add a response to an operation |
| `document_remove_response` | Remove a response |
| `document_remove_all_responses` | Remove all responses from an operation |
| `document_add_response_definition` | Add a reusable response definition |
| `document_add_response_header` | Add a header to a response |
| `document_remove_response_header` | Remove a header from a response |
| `document_remove_all_response_headers` | Remove all headers from a response |
| `document_add_header_definition` | Add a reusable header definition |
| `document_remove_header_definition` | Remove a reusable header definition |

### Media Types

| Tool | Description |
|------|-------------|
| `document_add_media_type` | Add a media type to a request body or response |
| `document_remove_media_type` | Remove a media type |
| `document_set_media_type_schema` | Set the schema for a media type |

### Schemas

| Tool | Description |
|------|-------------|
| `document_add_schema` | Add a schema definition |
| `document_remove_schema` | Remove a schema definition |
| `document_rename_schema` | Rename a schema and update all `$ref` references |
| `document_add_schema_property` | Add a property to a schema |
| `document_remove_schema_property` | Remove a property from a schema |
| `document_remove_all_schema_properties` | Remove all properties from a schema |
| `document_set_schema_required` | Set the required array on a schema |
| `document_set_schema_type` | Set the type field on a schema |
| `document_add_schema_enum` | Set enum values on a schema |

### Security

| Tool | Description |
|------|-------------|
| `document_add_security_scheme` | Add a security scheme definition |
| `document_remove_security_scheme` | Remove a security scheme |
| `document_update_security_scheme` | Update an existing security scheme |
| `document_remove_all_security_schemes` | Remove all security schemes |
| `document_add_security_requirement` | Add a security requirement |
| `document_remove_all_security_requirements` | Remove all security requirements |

### Tags & Servers

| Tool | Description |
|------|-------------|
| `document_add_tag` | Add a tag definition |
| `document_remove_tag` | Remove a tag |
| `document_rename_tag` | Rename a tag across the entire document |
| `document_remove_all_tags` | Remove all tags |
| `document_add_server` | Add a server definition |
| `document_remove_server` | Remove a server |
| `document_add_server_variable` | Add a variable to a server |
| `document_remove_server_variable` | Remove a server variable |
| `document_remove_all_servers` | Remove all servers |

### Extensions

| Tool | Description |
|------|-------------|
| `document_add_extension` | Add a vendor extension (`x-*` property) |
| `document_update_extension` | Update an existing extension |
| `document_remove_extension` | Remove an extension |
| `document_remove_all_extensions` | Remove all extensions from a node |

### Examples & Links

| Tool | Description |
|------|-------------|
| `document_add_example` | Add a named example to a media type or parameter |
| `document_remove_all_examples` | Remove all examples |
| `document_add_example_definition` | Add a reusable example definition |
| `document_remove_example_definition` | Remove a reusable example definition |
| `document_add_link` | Add a link to a response |
| `document_remove_link` | Remove a link |
| `document_add_callback` | Add a callback to an operation |
| `document_remove_callback` | Remove a callback |

### Generic Node Operations

| Tool | Description |
|------|-------------|
| `document_set_node` | Set or replace any node by node path |
| `document_remove_node` | Remove any node by node path |
| `document_add_channel` | Add a channel (AsyncAPI) |

## Validation Tool (1)

| Tool | Description |
|------|-------------|
| `document_validate` | Validate the document and return structured problems |

Returns a list of validation problems, each with severity (Error, Warning, Info, Hint),
message, node path, and error code.

## Transform Tools (2)

| Tool | Description |
|------|-------------|
| `document_transform` | Convert between spec versions (e.g., OpenAPI 3.0 → 3.1) |
| `document_dereference` | Resolve all `$ref` references inline |
