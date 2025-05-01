# Reference

## ApiKeys

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">readApiKey</a>(id, { ...params }) -> AirweaveSDK.ApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve an API key by ID.

## Args:

    db (AsyncSession): The database session.
    id (UUID): The ID of the API key.
    user (schemas.User): The current user.

## Returns:

    schemas.APIKey: The API key object.

## Raises:

    HTTPException: If the API key is not found.

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
await client.apiKeys.readApiKey("id", {
    creds: "creds",
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.ReadApiKeyApiKeysIdGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sources

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">readSource</a>(shortName, { ...params }) -> AirweaveSDK.SourceWithConfigFields</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get source by id.

## Args:

    db (AsyncSession): The database session.
    short_name (str): The short name of the source.
    user (schemas.User): The current user.

## Returns:

    schemas.Source: The source object.

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
await client.sources.readSource("short_name", {
    creds: "creds",
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

**shortName:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.ReadSourceSourcesDetailShortNameGetRequest`

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

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">readSources</a>({ ...params }) -> AirweaveSDK.Source[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all sources for the current user.

## Args:

    db: The database session
    user: The current user

## Returns:

    list[schemas.Source]: The list of sources.

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
await client.sources.readSources({
    creds: "creds",
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

**request:** `AirweaveSDK.ReadSourcesSourcesListGetRequest`

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

## EmbeddingModels

<details><summary><code>client.embeddingModels.<a href="/src/api/resources/embeddingModels/client/Client.ts">readEmbeddingModel</a>(shortName, { ...params }) -> AirweaveSDK.EmbeddingModelWithConfigFields</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get embedding model by id.

## Args:

    db (AsyncSession): The database session.
    short_name (str): The short name of the embedding model.
    user (schemas.User): The current user.

## Returns:

    schemas.EmbeddingModel: The embedding model object.

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
await client.embeddingModels.readEmbeddingModel("short_name", {
    creds: "creds",
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

**shortName:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.ReadEmbeddingModelEmbeddingModelsDetailShortNameGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmbeddingModels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.embeddingModels.<a href="/src/api/resources/embeddingModels/client/Client.ts">readEmbeddingModels</a>({ ...params }) -> AirweaveSDK.EmbeddingModel[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all embedding models.

## Args:

    db (AsyncSession): The database session.
    user (schemas.User): The current user.

## Returns:

    list[schemas.EmbeddingModel]: The list of embedding models.

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
await client.embeddingModels.readEmbeddingModels({
    creds: "creds",
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

**request:** `AirweaveSDK.ReadEmbeddingModelsEmbeddingModelsListGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmbeddingModels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Connections

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">getConnection</a>(connectionId, { ...params }) -> AirweaveSDK.Connection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific connection.

## Args:

    connection_id: The ID of the connection to get.
    db: The database session.
    user: The current user.

## Returns:

    schemas.Connection: The connection.

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
await client.connections.getConnection("connection_id", {
    creds: "creds",
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

**connectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.GetConnectionConnectionsDetailConnectionIdGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">listAllConnectedIntegrations</a>({ ...params }) -> AirweaveSDK.Connection[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all active connections for the current user across all integration types.

## Args:

    db: The database session.
    user: The current user.

## Returns:

    list[schemas.Connection]: The list of connections.

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
await client.connections.listAllConnectedIntegrations({
    creds: "creds",
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

**request:** `AirweaveSDK.ListAllConnectedIntegrationsConnectionsListGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">listConnectedIntegrations</a>(integrationType, { ...params }) -> AirweaveSDK.Connection[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all integrations of specified type connected to the current user.

## Args:

    integration_type (IntegrationType): The type of integration to get connections for.
    db (AsyncSession): The database session.
    user (schemas.User): The current user.

## Returns:

    list[schemas.Connection]: The list of connections.

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
await client.connections.listConnectedIntegrations("source", {
    creds: "creds",
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

**integrationType:** `AirweaveSDK.IntegrationType`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.ListConnectedIntegrationsConnectionsListIntegrationTypeGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">connectIntegration</a>(integrationType, shortName, { ...params }) -> AirweaveSDK.Connection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Connect to a source, destination, or embedding model.

Expects a POST body with:

```json
{
    "name": "required connection name",
    ... other config fields specific to the integration type ...
}
```

## Args:

    db: The database session.
    integration_type: The type of integration to connect to.
    short_name: The short name of the integration to connect to.
    name: The name of the connection.
    config_fields: The config fields for the integration.
    user: The current user.

## Returns:

    schemas.Connection: The connection.

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
await client.connections.connectIntegration("source", "short_name", {
    creds: "creds",
    name: undefined,
    configFields: {
        config_fields: {
            key: "value",
        },
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

**integrationType:** `AirweaveSDK.IntegrationType`

</dd>
</dl>

<dl>
<dd>

**shortName:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.BodyConnectIntegrationConnectionsConnectIntegrationTypeShortNamePost`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">getConnectionCredentials</a>(connectionId, { ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the credentials for a connection.

## Args:

    connection_id (UUID): The ID of the connection to get credentials for
    db (AsyncSession): The database session
    user (schemas.User): The current user

## Returns:

    decrypted_credentials (dict): The credentials for the connection

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
await client.connections.getConnectionCredentials("connection_id", {
    creds: "creds",
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

**connectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.GetConnectionCredentialsConnectionsCredentialsConnectionIdGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">deleteConnection</a>(connectionId, { ...params }) -> AirweaveSDK.Connection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a connection.

Deletes the connection and integration credential.

## Args:

    db (AsyncSession): The database session
    connection_id (UUID): The ID of the connection to delete
    user (schemas.User): The current user

## Returns:

    connection (schemas.Connection): The deleted connection

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
await client.connections.deleteConnection("connection_id", {
    creds: "creds",
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

**connectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.DeleteConnectionConnectionsDeleteSourceConnectionIdDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">disconnectSourceConnection</a>(connectionId, { ...params }) -> AirweaveSDK.Connection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Disconnect from a source connection.

## Args:

    db (AsyncSession): The database session
    connection_id (UUID): The ID of the connection to disconnect
    user (schemas.User): The current user

## Returns:

    connection (schemas.Connection): The disconnected connection

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
await client.connections.disconnectSourceConnection("connection_id", {
    creds: "creds",
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

**connectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.DisconnectSourceConnectionConnectionsDisconnectSourceConnectionIdPutRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">sendOauth2WhiteLabelCode</a>(whiteLabelId, { ...params }) -> AirweaveSDK.Connection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange the OAuth2 authorization code for a white label integration.

## Args:

    db: The database session
    white_label_id: The ID of the white label integration
    code: The authorization code
    user: The current user
    background_tasks: The background tasks

## Returns:

    connection (schemas.Connection): The created connection

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
await client.connections.sendOauth2WhiteLabelCode("white_label_id", {
    creds: "creds",
    body: "string",
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

**whiteLabelId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.SendOauth2WhiteLabelCodeConnectionsOauth2WhiteLabelWhiteLabelIdCodePostRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">getOauth2WhiteLabelAuthUrl</a>(whiteLabelId, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the OAuth2 authorization URL for a white label integration.

## Args:

    db: The database session
    white_label_id: The ID of the white label integration
    user: The current user

## Returns:

    str: The OAuth2 authorization URL

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
await client.connections.getOauth2WhiteLabelAuthUrl("white_label_id", {
    creds: "creds",
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

**whiteLabelId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.GetOauth2WhiteLabelAuthUrlConnectionsOauth2WhiteLabelWhiteLabelIdAuthUrlGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sync

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">listSyncs</a>({ ...params }) -> AirweaveSDK.ListSyncsSyncGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all syncs for the current user.

## Args:

    db: The database session
    skip: The number of syncs to skip
    limit: The number of syncs to return
    with_source_connection: Whether to include the source connection in the response
    user: The current user

## Returns:

    list[schemas.Sync] | list[schemas.SyncWithSourceConnection]: A list of syncs

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
await client.sync.listSyncs({
    creds: "creds",
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

**request:** `AirweaveSDK.ListSyncsSyncGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">createSync</a>({ ...params }) -> AirweaveSDK.Sync</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new sync configuration.

## Args:

    db: The database session
    sync_in: The sync to create
    user: The current user
    background_tasks: The background tasks

## Returns:

    sync (schemas.Sync): The created sync

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
await client.sync.createSync({
    creds: "creds",
    name: "name",
    sourceConnectionId: "source_connection_id",
    embeddingModelConnectionId: undefined,
    destinationConnectionIds: ["destination_connection_ids", "destination_connection_ids"],
    description: undefined,
    cronSchedule: undefined,
    nextScheduledRun: undefined,
    whiteLabelId: undefined,
    whiteLabelUserIdentifier: undefined,
    syncMetadata: undefined,
    status: undefined,
    runImmediately: undefined,
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

**request:** `AirweaveSDK.SyncCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">listAllJobs</a>({ ...params }) -> AirweaveSDK.SyncJob[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all sync jobs across all syncs.

## Args:

    db: The database session
    skip: The number of jobs to skip
    limit: The number of jobs to return
    status: Filter by job status
    user: The current user

## Returns:

    list[schemas.SyncJob]: A list of all sync jobs

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
await client.sync.listAllJobs({
    creds: "creds",
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

**request:** `AirweaveSDK.ListAllJobsSyncJobsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">getSync</a>(syncId, { ...params }) -> AirweaveSDK.Sync</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific sync by ID.

## Args:

    db: The database session
    sync_id: The ID of the sync to get
    user: The current user

## Returns:

    sync (schemas.Sync): The sync

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
await client.sync.getSync("sync_id", {
    creds: "creds",
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

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.GetSyncSyncSyncIdGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">deleteSync</a>(syncId, { ...params }) -> AirweaveSDK.Sync</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a sync configuration and optionally its associated data.

## Args:

    db: The database session
    sync_id: The ID of the sync to delete
    delete_data: Whether to delete the data associated with the sync
    user: The current user

## Returns:

    sync (schemas.Sync): The deleted sync

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
await client.sync.deleteSync("sync_id", {
    creds: "creds",
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

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.DeleteSyncSyncSyncIdDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">updateSync</a>(syncId, { ...params }) -> AirweaveSDK.Sync</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a sync configuration.

## Args:

    db: The database session
    sync_id: The ID of the sync to update
    sync_update: The sync update data
    user: The current user

## Returns:

    sync (schemas.Sync): The updated sync

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
await client.sync.updateSync("sync_id", {
    creds: "creds",
    name: undefined,
    cronSchedule: undefined,
    nextScheduledRun: undefined,
    whiteLabelId: undefined,
    whiteLabelUserIdentifier: undefined,
    syncMetadata: undefined,
    status: undefined,
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

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.SyncUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">runSync</a>(syncId, { ...params }) -> AirweaveSDK.SyncJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Trigger a sync run.

## Args:

    db: The database session
    sync_id: The ID of the sync to run
    user: The current user
    background_tasks: The background tasks

## Returns:

    sync_job (schemas.SyncJob): The sync job

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
await client.sync.runSync("sync_id", {
    creds: "creds",
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

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.RunSyncSyncSyncIdRunPostRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">listSyncJobs</a>(syncId, { ...params }) -> AirweaveSDK.SyncJob[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all jobs for a specific sync.

## Args:

    db: The database session
    sync_id: The ID of the sync to list jobs for
    user: The current user

## Returns:

    list[schemas.SyncJob]: A list of sync jobs

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
await client.sync.listSyncJobs("sync_id", {
    creds: "creds",
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

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.ListSyncJobsSyncSyncIdJobsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">getSyncJob</a>(syncId, jobId, { ...params }) -> AirweaveSDK.SyncJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details of a specific sync job.

## Args:

    db: The database session
    sync_id: The ID of the sync to list jobs for
    job_id: The ID of the job to get
    user: The current user

## Returns:

    sync_job (schemas.SyncJob): The sync job

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
await client.sync.getSyncJob("sync_id", "job_id", {
    creds: "creds",
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

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**jobId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.GetSyncJobSyncSyncIdJobJobIdGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">subscribeSyncJob</a>(jobId) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Server-Sent Events (SSE) endpoint to subscribe to a sync job's progress.

## Args:

    job_id: The ID of the job to subscribe to
    request: The request object
    db: The database session

## Returns:

    StreamingResponse: The streaming response

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
await client.sync.subscribeSyncJob("job_id");
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

**jobId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">getSyncDag</a>(syncId, { ...params }) -> AirweaveSDK.SyncDag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the DAG for a specific sync.

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
await client.sync.getSyncDag("sync_id", {
    creds: "creds",
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

**syncId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.GetSyncDagSyncSyncIdDagGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Search

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">search</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for documents within a specific sync.

## Args:

    db: The database session
    sync_id: The ID of the sync to search within
    query: The search query text
    response_type: Type of response (raw results or AI completion)
    user: The current user

## Returns:

    dict: A dictionary containing search results or AI completion

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
await client.search.search({
    syncId: "sync_id",
    query: "query",
    creds: "creds",
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

**request:** `AirweaveSDK.SearchSearchGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## WhiteLabels

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">listWhiteLabels</a>({ ...params }) -> AirweaveSDK.WhiteLabel[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all white labels for the current user's organization.

## Args:

    db: The database session
    current_user: The current user

## Returns:

    list[schemas.WhiteLabel]: A list of white labels

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
await client.whiteLabels.listWhiteLabels({
    creds: "creds",
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

**request:** `AirweaveSDK.ListWhiteLabelsWhiteLabelsListGetRequest`

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

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">createWhiteLabel</a>({ ...params }) -> AirweaveSDK.WhiteLabel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create new white label integration.

## Args:

    db: The database session
    current_user: The current user
    white_label_in: The white label to create

## Returns:

    white_label (schemas.WhiteLabel): The created white label

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
    creds: "creds",
    name: "name",
    sourceShortName: "source_short_name",
    redirectUrl: "redirect_url",
    clientId: "client_id",
    clientSecret: "client_secret",
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

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">getWhiteLabel</a>(whiteLabelId, { ...params }) -> AirweaveSDK.WhiteLabel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific white label integration.

## Args:

    db: The database session
    white_label_id: The ID of the white label to get
    current_user: The current user

## Returns:

    white_label (schemas.WhiteLabel): The white label

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
await client.whiteLabels.getWhiteLabel("white_label_id", {
    creds: "creds",
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

**whiteLabelId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.GetWhiteLabelWhiteLabelsWhiteLabelIdGetRequest`

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

Update a white label integration.

## Args:

    db: The database session
    current_user: The current user
    white_label_id: The ID of the white label to update
    white_label_in: The white label to update

## Returns:

    white_label (schemas.WhiteLabel): The updated white label

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
    creds: "creds",
    name: undefined,
    redirectUrl: undefined,
    clientId: undefined,
    clientSecret: undefined,
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

**whiteLabelId:** `string`

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

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">deleteWhiteLabel</a>(whiteLabelId, { ...params }) -> AirweaveSDK.WhiteLabel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a white label integration.

## Args:

    db: The database session
    current_user: The current user
    white_label_id: The ID of the white label to delete

## Returns:

    white_label (schemas.WhiteLabel): The deleted white label

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
await client.whiteLabels.deleteWhiteLabel("white_label_id", {
    creds: "creds",
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

**whiteLabelId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.DeleteWhiteLabelWhiteLabelsWhiteLabelIdDeleteRequest`

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

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">getWhiteLabelOauth2AuthUrl</a>(whiteLabelId, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate the OAuth2 authorization URL by delegating to oauth2_service.

## Args:

    db: The database session
    white_label_id: The ID of the white label to get the auth URL for
    user: The current user

## Returns:

    str: The OAuth2 authorization URL

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
await client.whiteLabels.getWhiteLabelOauth2AuthUrl("white_label_id", {
    creds: "creds",
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

**whiteLabelId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.GetWhiteLabelOauth2AuthUrlWhiteLabelsWhiteLabelIdOauth2AuthUrlGetRequest`

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

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">exchangeWhiteLabelOauth2Code</a>(whiteLabelId, { ...params }) -> AirweaveSDK.Connection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange OAuth2 code for tokens and create connection.

## Args:

    white_label_id: The ID of the white label to exchange the code for
    code: The OAuth2 code
    db: The database session
    user: The current user

## Returns:

    connection (schemas.Connection): The created connection

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
    creds: "creds",
    body: "string",
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

**whiteLabelId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.ExchangeWhiteLabelOauth2CodeWhiteLabelsWhiteLabelIdOauth2CodePostRequest`

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

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">listWhiteLabelSyncs</a>(whiteLabelId, { ...params }) -> AirweaveSDK.Sync[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all syncs for a specific white label.

## Args:

    white_label_id: The ID of the white label to list syncs for
    db: The database session
    current_user: The current user

## Returns:

    list[schemas.Sync]: A list of syncs

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
await client.whiteLabels.listWhiteLabelSyncs("white_label_id", {
    creds: "creds",
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

**whiteLabelId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.ListWhiteLabelSyncsWhiteLabelsWhiteLabelIdSyncsGetRequest`

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
