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

## AuthProviders

<details><summary><code>client.authProviders.<a href="/src/api/resources/authProviders/client/Client.ts">connectOrUpdateAuthProvider</a>({ ...params }) -> AirweaveSDK.AuthProviderConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update an auth provider connection.

If a connection for this auth provider already exists for the organization,
it will be updated with the new credentials and fields.
If no connection exists, a new one will be created.

## Args:

    db: The database session
    ctx: The current authentication context
    auth_provider_connection_in: The auth provider connection data

## Returns:

    schemas.AuthProviderConnection: The created or updated connection

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
await client.authProviders.connectOrUpdateAuthProvider({
    name: "My Composio Connection",
    description: "My Composio Connection",
    short_name: "composio",
    auth_fields: {
        api_key: "comp_1234567890abcdef",
    },
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

**request:** `AirweaveSDK.AuthProviderConnectionCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthProviders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authProviders.<a href="/src/api/resources/authProviders/client/Client.ts">getAuthProvider</a>(shortName) -> AirweaveSDK.AuthProvider</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details of a specific auth provider.

## Args:

    db: The database session
    short_name: The short name of the auth provider
    ctx: The current authentication context

## Returns:

    schemas.AuthProvider: The auth provider details

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
await client.authProviders.getAuthProvider("short_name");
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

**shortName:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthProviders.RequestOptions`

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

List source connections across your organization.

By default, returns ALL source connections from every collection in your
organization. Use the 'collection' parameter to filter results to a specific
collection. This is useful for getting an overview of all your data sources
or managing connections within a particular collection.

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

Create a new source connection to sync data into your collection.

**This endpoint only works for sources that do not use OAuth2.0.**
Sources that do use OAuth2.0 like Google Drive, Slack, or HubSpot must be
connected through the UI where you can complete the OAuth consent flow
or using Auth Providers (see [Auth Providers](/docs/auth-providers)).<br/><br/>

Credentials for a source have to be provided using the `auth_fields` field.
Currently, it is not automatically checked if the provided credentials are valid.
If they are not valid, the data synchronization will fail.<br/><br/>

Check the documentation of a specific source (for example
[Github](https://docs.airweave.ai/docs/connectors/github)) to see what kind
of authentication is used.

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
    name: "Production Stripe Account",
    short_name: "stripe",
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

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">get</a>(sourceConnectionId, { ...params }) -> AirweaveSDK.SourceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific source connection by its ID.

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

**sourceConnectionId:** `string` — The unique identifier of the source connection

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.GetSourceConnectionsSourceConnectionIdGetRequest`

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

Update a source connection's properties.

Modify the configuration of an existing source connection including its name,
authentication credentials, configuration fields, sync schedule, or source-specific settings.

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

**sourceConnectionId:** `string` — The unique identifier of the source connection to update

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

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">delete</a>(sourceConnectionId) -> AirweaveSDK.SourceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a source connection and all associated data.

Permanently removes the source connection configuration and credentials.
By default, previously synced data remains in your destination systems for continuity.
Use delete_data=true to also remove all associated data from destination systems.

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

**sourceConnectionId:** `string` — The unique identifier of the source connection to delete

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

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">run</a>(sourceConnectionId, { ...params }) -> AirweaveSDK.SourceConnectionJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Manually trigger a data sync for this source connection.

Starts an immediate synchronization job that extracts fresh data from your source,
transforms it according to your configuration, and updates the destination systems.
The job runs asynchronously and endpoint returns immediately with tracking information.

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

**sourceConnectionId:** `string` — The unique identifier of the source connection to sync

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.BodyRunSourceConnectionsSourceConnectionIdRunPost`

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

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">listJobs</a>(sourceConnectionId) -> AirweaveSDK.SourceConnectionJob[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all sync jobs for a source connection.

Returns the complete history of data synchronization jobs including successful syncs,
failed attempts, and currently running operations.

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
await client.sourceConnections.listJobs("source_connection_id");
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

**sourceConnectionId:** `string` — The unique identifier of the source connection

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

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">getJob</a>(sourceConnectionId, jobId) -> AirweaveSDK.SourceConnectionJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get detailed information about a specific sync job.

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
await client.sourceConnections.getJob("source_connection_id", "job_id");
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

**sourceConnectionId:** `string` — The unique identifier of the source connection

</dd>
</dl>

<dl>
<dd>

**jobId:** `string` — The unique identifier of the sync job

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

Cancel a running sync job.

Sends a cancellation signal to stop an in-progress data synchronization.
The job will complete its current operation and then terminate gracefully.
Only jobs in 'created', 'pending', or 'in_progress' states can be cancelled.

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

**sourceConnectionId:** `string` — The unique identifier of the source connection

</dd>
</dl>

<dl>
<dd>

**jobId:** `string` — The unique identifier of the sync job to cancel

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

## white-labels

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">listWhiteLabels</a>() -> AirweaveSDK.WhiteLabel[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all white label integrations for your organization.

<br/><br/>
Returns all custom OAuth integrations configured with your own branding and
credentials. These integrations allow you to present OAuth consent screens with
your company name instead of Airweave.<br/><br/>**White label integrations only
work with OAuth2.0 sources** like Slack, Google Drive, or HubSpot that require
OAuth consent flows.

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
await client.whiteLabels.listWhiteLabels();
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

**requestOptions:** `WhiteLabels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">createWhiteLabel</a>({ ...params }) -> AirweaveSDK.WhiteLabel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new white label integration.

<br/><br/>
**This only works for sources that use OAuth2.0 authentication** like Slack,
Google Drive, GitHub, or HubSpot.<br/><br/>Sets up a custom OAuth integration
using your own OAuth application credentials and branding. Once created,
customers will see your company name during OAuth consent flows instead of
Airweave. This requires you to have already configured your own OAuth
application with the target service provider.

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
await client.whiteLabels.createWhiteLabel({
    name: "Customer Portal Slack Integration",
    source_short_name: "slack",
    redirect_url: "https://yourapp.com/auth/slack/callback",
    client_id: "1234567890.1234567890123",
    client_secret: "abcdefghijklmnopqrstuvwxyz123456",
    allowed_origins: "https://yourapp.com,https://app.yourapp.com",
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

**request:** `AirweaveSDK.WhiteLabelCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WhiteLabels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">getWhiteLabel</a>(whiteLabelId) -> AirweaveSDK.WhiteLabel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific white label integration by its ID.

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
await client.whiteLabels.getWhiteLabel("white_label_id");
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

**whiteLabelId:** `string` — The unique identifier of the white label integration

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WhiteLabels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">updateWhiteLabel</a>(whiteLabelId, { ...params }) -> AirweaveSDK.WhiteLabel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a white label integration's configuration.

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
await client.whiteLabels.updateWhiteLabel("white_label_id", {
    name: "Updated Customer Portal Integration",
    redirect_url: "https://v2.yourapp.com/auth/slack/callback",
    allowed_origins: "https://v2.yourapp.com,https://api.yourapp.com",
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

**whiteLabelId:** `string` — The unique identifier of the white label integration to update

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.WhiteLabelUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WhiteLabels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">deleteWhiteLabel</a>(whiteLabelId) -> AirweaveSDK.WhiteLabel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a white label integration.

<br/><br/>
Permanently removes the white label configuration and OAuth credentials.
Existing source connections created through this integration will continue to work,
but no new OAuth flows can be initiated until a new white label integration is created.

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
await client.whiteLabels.deleteWhiteLabel("white_label_id");
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

**whiteLabelId:** `string` — The unique identifier of the white label integration to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WhiteLabels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">getWhiteLabelOauth2AuthUrl</a>(whiteLabelId) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a branded OAuth2 authorization URL for customer authentication.

<br/><br/>
Creates the OAuth consent URL that customers should be redirected to for
authentication. The OAuth consent screen will display your company name and
branding instead of Airweave.

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
await client.whiteLabels.getWhiteLabelOauth2AuthUrl("white_label_id");
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

**whiteLabelId:** `string` — The unique identifier of the white label integration

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WhiteLabels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">listWhiteLabelSourceConnections</a>(whiteLabelId) -> AirweaveSDK.SourceConnectionListItem[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all source connections created through a specific white label integration.

<br/><br/>
Returns source connections that were established using this white label's OAuth flow.

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
await client.whiteLabels.listWhiteLabelSourceConnections("white_label_id");
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

**whiteLabelId:** `string` — The unique identifier of the white label integration

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WhiteLabels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">exchangeWhiteLabelOauth2Code</a>(whiteLabelId, { ...params }) -> AirweaveSDK.SourceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Complete the OAuth flow and create a source connection.

<br/><br/>
**This is the core endpoint that converts OAuth authorization codes into working
source connections.**<br/><br/>The OAuth credentials are obtained automatically
from the authorization code - you do not need to provide auth_fields. The white
label integration is automatically linked to the created source connection for
tracking and branding purposes.

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
await client.whiteLabels.exchangeWhiteLabelOauth2Code("white_label_id", {
    code: "4/P7q7W91a-oMsCeLvIaQm6bTrgtp7",
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

**whiteLabelId:** `string` — The unique identifier of the white label integration

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.BodyExchangeWhiteLabelOauth2CodeWhiteLabelsWhiteLabelIdOauth2CodePost`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WhiteLabels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
