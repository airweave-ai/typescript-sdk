# Reference

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">readUser</a>() -> AirweaveSDK.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get current user.

## Args:

    current_user (User): The current user.

## Returns:

    schemas.User: The user object.

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
await client.users.readUser();
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

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sources

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">readSource</a>(shortName) -> AirweaveSDK.SourceWithConfigFields</code></summary>
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
await client.sources.readSource("short_name");
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

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">readSources</a>() -> AirweaveSDK.Source[]</code></summary>
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
await client.sources.readSources();
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

## Destinations

<details><summary><code>client.destinations.<a href="/src/api/resources/destinations/client/Client.ts">listDestinations</a>() -> AirweaveSDK.Destination[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all available destinations.

## Args:

    db: The database session
    user: The current user

## Returns:

    List[schemas.Destination]: A list of destinations

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
await client.destinations.listDestinations();
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

**requestOptions:** `Destinations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.destinations.<a href="/src/api/resources/destinations/client/Client.ts">readDestination</a>(shortName) -> AirweaveSDK.DestinationWithConfigFields</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get destination by short name.

## Args:

    db: The database session
    short_name: The short name of the destination
    user: The current user

## Returns:

    destination (schemas.Destination): The destination

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
await client.destinations.readDestination("short_name");
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

**requestOptions:** `Destinations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## EmbeddingModels

<details><summary><code>client.embeddingModels.<a href="/src/api/resources/embeddingModels/client/Client.ts">readEmbeddingModel</a>(shortName) -> AirweaveSDK.EmbeddingModelWithConfigFields</code></summary>
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
await client.embeddingModels.readEmbeddingModel("short_name");
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

**requestOptions:** `EmbeddingModels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.embeddingModels.<a href="/src/api/resources/embeddingModels/client/Client.ts">readEmbeddingModels</a>() -> AirweaveSDK.EmbeddingModel[]</code></summary>
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
await client.embeddingModels.readEmbeddingModels();
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

**requestOptions:** `EmbeddingModels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Connections

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">getConnection</a>(connectionId) -> AirweaveSDK.Connection</code></summary>
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
await client.connections.getConnection("connection_id");
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

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">listAllConnectedIntegrations</a>() -> AirweaveSDK.Connection[]</code></summary>
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
await client.connections.listAllConnectedIntegrations();
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

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">listConnectedIntegrations</a>(integrationType) -> AirweaveSDK.Connection[]</code></summary>
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
await client.connections.listConnectedIntegrations("source");
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
    configFields: {
        key: "value",
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

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">getConnectionCredentials</a>(connectionId) -> Record<string, unknown></code></summary>
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
await client.connections.getConnectionCredentials("connection_id");
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

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">deleteConnection</a>(connectionId) -> AirweaveSDK.Connection</code></summary>
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
await client.connections.deleteConnection("connection_id");
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

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">disconnectSourceConnection</a>(connectionId) -> AirweaveSDK.Connection</code></summary>
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

    connection_schema (schemas.Connection): The disconnected connection

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
await client.connections.disconnectSourceConnection("connection_id");
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

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">disconnectDestinationConnection</a>(connectionId) -> AirweaveSDK.Connection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Disconnect from a destination connection.

## Args:

    db (AsyncSession): The database session
    connection_id (UUID): The ID of the connection to disconnect
    user (schemas.User): The current user

## Returns:

    connection_schema (schemas.Connection): The disconnected connection

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
await client.connections.disconnectDestinationConnection("connection_id");
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

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">getOauth2AuthUrl</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the OAuth2 authorization URL for a source.

## Args:

    db: The database session
    short_name: The short name of the source
    user: The current user

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
await client.connections.getOauth2AuthUrl({
    shortName: "short_name",
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

**request:** `AirweaveSDK.GetOauth2AuthUrlConnectionsOauth2SourceAuthUrlGetRequest`

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

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">sendOauth2Code</a>({ ...params }) -> AirweaveSDK.Connection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send the OAuth2 authorization code for a source.

This will:

1. Get the OAuth2 settings for the source
2. Exchange the authorization code for a token
3. Create an integration credential with the token

## Args:

    db: The database session
    short_name: The short name of the source
    code: The authorization code
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
await client.connections.sendOauth2Code({
    shortName: "short_name",
    code: "code",
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

**request:** `AirweaveSDK.BodySendOauth2CodeConnectionsOauth2SourceCodePost`

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
await client.connections.sendOauth2WhiteLabelCode("white_label_id", "string");
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

**request:** `string`

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

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">getOauth2WhiteLabelAuthUrl</a>(whiteLabelId) -> string</code></summary>
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
await client.connections.getOauth2WhiteLabelAuthUrl("white_label_id");
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
await client.sync.listSyncs();
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
    name: "name",
    sourceConnectionId: "source_connection_id",
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

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">getSync</a>(syncId) -> AirweaveSDK.Sync</code></summary>
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
await client.sync.getSync("sync_id");
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
await client.sync.deleteSync("sync_id");
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

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">runSync</a>(syncId) -> AirweaveSDK.SyncJob</code></summary>
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
await client.sync.runSync("sync_id");
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

**requestOptions:** `Sync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">listSyncJobs</a>(syncId) -> AirweaveSDK.SyncJob[]</code></summary>
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
await client.sync.listSyncJobs("sync_id");
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

**requestOptions:** `Sync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">getSyncJob</a>(jobId, { ...params }) -> AirweaveSDK.SyncJob</code></summary>
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
await client.sync.getSyncJob("job_id", {
    syncId: "sync_id",
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

**jobId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.GetSyncJobSyncJobJobIdGetRequest`

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
    user: The current user

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

## WhiteLabels

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">listWhiteLabels</a>() -> AirweaveSDK.WhiteLabel[]</code></summary>
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

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">getWhiteLabel</a>(whiteLabelId) -> AirweaveSDK.WhiteLabel</code></summary>
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

**whiteLabelId:** `string`

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
await client.whiteLabels.updateWhiteLabel("white_label_id");
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

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">deleteWhiteLabel</a>(whiteLabelId) -> AirweaveSDK.WhiteLabel</code></summary>
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

**whiteLabelId:** `string`

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

**whiteLabelId:** `string`

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
await client.whiteLabels.exchangeWhiteLabelOauth2Code("white_label_id", "string");
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

**request:** `string`

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

<details><summary><code>client.whiteLabels.<a href="/src/api/resources/whiteLabels/client/Client.ts">listWhiteLabelSyncs</a>(whiteLabelId) -> AirweaveSDK.Sync[]</code></summary>
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
await client.whiteLabels.listWhiteLabelSyncs("white_label_id");
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

**requestOptions:** `WhiteLabels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
