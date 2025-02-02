# Reference

## Health

<details><summary><code>client.health.<a href="/src/api/resources/health/client/Client.ts">healthCheck</a>() -> Record<string, string></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Check if the API is healthy.

Returns:
dict: A dictionary containing the status of the API.

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
await client.health.healthCheck();
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

**requestOptions:** `Health.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ApiKeys

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">readApiKeys</a>({ ...params }) -> AirweaveSDK.ApiKey[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all API keys for the current user.

## Args:

    db (AsyncSession): The database session.
    skip (int): Number of records to skip for pagination.
    limit (int): Maximum number of records to return.
    user (schemas.User): The current user.

## Returns:

    List[schemas.APIKey]: A list of API keys.

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
await client.apiKeys.readApiKeys();
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

**request:** `AirweaveSDK.ReadApiKeysApiKeysGetRequest`

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

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">createApiKey</a>({ ...params }) -> AirweaveSDK.ApiKeyWithPlainKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new API key for the current user.

Returns a temporary plain key for the user to store securely.
This is not stored in the database.

## Args:

    db (AsyncSession): The database session.
    api_key_in (schemas.APIKeyCreate): The API key creation data.
    user (schemas.User): The current user.

## Returns:

    schemas.APIKeyWithPlainKey: The created API key object, including the key.

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
await client.apiKeys.createApiKey();
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

**request:** `AirweaveSDK.ApiKeyCreate`

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

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">deleteApiKey</a>({ ...params }) -> AirweaveSDK.ApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an API key.

## Args:

    db (AsyncSession): The database session.
    id (UUID): The ID of the API key.
    user (schemas.User): The current user.

## Returns:

    schemas.APIKey: The revoked API key object.

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
await client.apiKeys.deleteApiKey({
    id: "id",
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

**request:** `AirweaveSDK.DeleteApiKeyApiKeysDeleteRequest`

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

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">readApiKey</a>(id) -> AirweaveSDK.ApiKey</code></summary>
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
await client.apiKeys.readApiKey("id");
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

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

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

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">readSource</a>(shortName) -> AirweaveSDK.Source</code></summary>
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

Args:
integration_type (IntegrationType): The type of integration to get connections for.
db (AsyncSession): The database session.
user (schemas.User): The current user.

Returns:
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

Args:
connection_id (UUID): The ID of the connection to get credentials for
db (AsyncSession): The database session
user (schemas.User): The current user

Returns:
dict: The credentials for the connection

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

Args:
db (AsyncSession): The database session
connection_id (UUID): The ID of the connection to delete
delete_syncs_and_data (bool): Whether to delete the associated syncs and data
user (schemas.User): The current user

Returns:
schemas.Connection: The deleted connection

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

Args:
db (AsyncSession): The database session
connection_id (UUID): The ID of the connection to disconnect
user (schemas.User): The current user
Returns:
schemas.Connection: The disconnected connection

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

Args:
db (AsyncSession): The database session
connection_id (UUID): The ID of the connection to disconnect
user (schemas.User): The current user

Returns:
schemas.Connection: The disconnected connection

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
    sourceId: "source_id",
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

## Chat

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">listChats</a>({ ...params }) -> AirweaveSDK.Chat[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all chats for the current user.

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
await client.chat.listChats();
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

**request:** `AirweaveSDK.ListChatsChatGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chat.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">createChat</a>({ ...params }) -> AirweaveSDK.Chat</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new chat.

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
await client.chat.createChat({
    name: "name",
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

**request:** `AirweaveSDK.ChatCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chat.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">getChat</a>(chatId) -> AirweaveSDK.Chat</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific chat by ID.

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
await client.chat.getChat("chat_id");
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

**chatId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chat.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">updateChat</a>(chatId, { ...params }) -> AirweaveSDK.Chat</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a chat.

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
await client.chat.updateChat("chat_id");
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

**chatId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.ChatUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chat.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">deleteChat</a>(chatId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Archive a chat.

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
await client.chat.deleteChat("chat_id");
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

**chatId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chat.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">sendMessage</a>(chatId, { ...params }) -> AirweaveSDK.ChatMessage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a message to a chat.

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
await client.chat.sendMessage("chat_id", {
    content: "content",
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

**chatId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.ChatMessageCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chat.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">streamChatResponse</a>(chatId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Stream an AI response for a chat message.

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
await client.chat.streamChatResponse("chat_id");
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

**chatId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chat.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
