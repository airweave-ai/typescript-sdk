# Reference

## sources

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">read</a>(shortName) -> AirweaveSDK.Source</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get detailed information about a specific data source connector.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.read("short_name");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**shortName:** `string` — Technical identifier of the source type (e.g., 'github', 'stripe', 'slack')

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">list</a>() -> AirweaveSDK.Source[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all available data source connectors.

<br/><br/>
Returns the complete catalog of source types that Airweave can connect to.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## collections

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">list</a>({ ...params }) -> AirweaveSDK.Collection[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all collections that belong to your organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `AirweaveSDK.ListCollectionsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">create</a>({ ...params }) -> AirweaveSDK.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new collection.

The newly created collection is initially empty and does not contain any data
until you explicitly add source connections to it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.create({
    name: "Finance Data",
    readable_id: "finance-data-reports",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `AirweaveSDK.CollectionCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">get</a>(readableId) -> AirweaveSDK.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific collection by its readable ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.get("readable_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**readableId:** `string` — The unique readable identifier of the collection (e.g., 'finance-data-ab123')

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">update</a>(readableId, { ...params }) -> AirweaveSDK.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a collection's properties.

Modifies the display name of an existing collection.
Note that the readable ID cannot be changed after creation to maintain stable
API endpoints and preserve any existing integrations or bookmarks.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.update("readable_id", {
    name: "Updated Finance Data",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**readableId:** `string` — The unique readable identifier of the collection to update

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.CollectionUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">delete</a>(readableId) -> AirweaveSDK.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a collection and all associated data.

Permanently removes a collection from your organization including all synced data
from the destination systems. All source connections within this collection
will also be deleted as part of the cleanup process. This action cannot be undone.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.delete("readable_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**readableId:** `string` — The unique readable identifier of the collection to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">search</a>(readableId, { ...params }) -> AirweaveSDK.SearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search across all data sources within the specified collection.

This GET endpoint provides basic search functionality. For advanced filtering
and options, use the POST /search endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.search("readable_id", {
    query: "customer payment issues",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**readableId:** `string` — The unique readable identifier of the collection to search

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.SearchCollectionsReadableIdSearchGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">searchAdvanced</a>(readableId, { ...params }) -> AirweaveSDK.SearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Advanced search with comprehensive filtering and options.

This endpoint supports:

- Metadata filtering using Qdrant's native filter syntax
- Pagination with offset and limit
- Score threshold filtering
- Query expansion strategies (default: AUTO, generates up to 4 variations)
- Automatic filter extraction from natural language (default: ON)
- LLM-based result reranking (default: ON)

Default behavior:

- Query expansion: ON (AUTO strategy)
- Query interpretation: ON (extracts filters from natural language)
- Reranking: ON (improves relevance using LLM)
- Score threshold: None (no filtering)

To disable features, explicitly set:

- enable_reranking: false
- enable_query_interpretation: false
- expansion_strategy: "no_expansion"
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.searchAdvanced("readable_id", {
    query: "customer payment issues",
    filter: {
        must: {
            key: "key",
        },
    },
    limit: 10,
    score_threshold: 0.7,
    response_type: "completion",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**readableId:** `string` — The unique readable identifier of the collection to search

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.SearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">refreshAllSourceConnections</a>(readableId) -> AirweaveSDK.SourceConnectionJob[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Trigger data synchronization for all source connections in the collection.

The sync jobs run asynchronously in the background, so this endpoint
returns immediately with job details that you can use to track progress. You can
monitor the status of individual data synchronization using the source connection
endpoints.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.refreshAllSourceConnections("readable_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**readableId:** `string` — The unique readable identifier of the collection to refresh

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## source-connections

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">list</a>({ ...params }) -> AirweaveSDK.SourceConnectionListItem[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List source connections with minimal fields for performance.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sourceConnections.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `AirweaveSDK.ListSourceConnectionsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">create</a>({ ...params }) -> AirweaveSDK.SourceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new source connection.

The authentication configuration determines the flow:

- DirectAuthentication: Immediate creation with provided credentials
- OAuthBrowserAuthentication: Returns shell with authentication URL
- OAuthTokenAuthentication: Immediate creation with provided token
- AuthProviderAuthentication: Using external auth provider

BYOC (Bring Your Own Client) is detected when client_id and client_secret
are provided in OAuthBrowserAuthentication.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sourceConnections.create({
    short_name: "short_name",
    readable_collection_id: "readable_collection_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `AirweaveSDK.SourceConnectionCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">get</a>(sourceConnectionId) -> AirweaveSDK.SourceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a source connection with optional depth expansion.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sourceConnections.get("source_connection_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sourceConnectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">delete</a>(sourceConnectionId) -> AirweaveSDK.SourceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a source connection and all related data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sourceConnections.delete("source_connection_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sourceConnectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">update</a>(sourceConnectionId, { ...params }) -> AirweaveSDK.SourceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a source connection.

Updateable fields:

- name, description
- config_fields
- cron_schedule
- auth_fields (direct auth only)
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sourceConnections.update("source_connection_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sourceConnectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.SourceConnectionUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">run</a>(sourceConnectionId) -> AirweaveSDK.SourceConnectionJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Trigger a sync run for a source connection.

Runs are always executed through Temporal workflow engine.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sourceConnections.run("source_connection_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sourceConnectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">getSourceConnectionJobs</a>(sourceConnectionId, { ...params }) -> AirweaveSDK.SourceConnectionJob[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get sync jobs for a source connection.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sourceConnections.getSourceConnectionJobs("source_connection_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sourceConnectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.GetSourceConnectionJobsSourceConnectionsSourceConnectionIdJobsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">cancelJob</a>(sourceConnectionId, jobId) -> AirweaveSDK.SourceConnectionJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel a running sync job for a source connection.

This will update the job status in the database to CANCELLED and
send a cancellation request to the Temporal workflow if it's running.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sourceConnections.cancelJob("source_connection_id", "job_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sourceConnectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**jobId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SourceConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
