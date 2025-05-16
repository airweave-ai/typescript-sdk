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

## Returns:

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

    short_name: The short name of the source

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

<details><summary><code>client.connections.<a href="/src/api/resources/connections/client/Client.ts">connectSlackWithToken</a>({ ...params }) -> AirweaveSDK.Connection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Connect to Slack using a direct API token (for local development only).

## Args:

    db: The database session.
    token: The Slack API token.
    name: The name of the connection.
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
await client.connections.connectSlackWithToken({
    token: "token",
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

**request:** `AirweaveSDK.BodyConnectSlackWithTokenConnectionsDirectTokenSlackPost`

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
    destinationConnectionIds: ["destination_connection_ids"],
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
await client.sync.listAllJobs();
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
await client.sync.updateSync("sync_id");
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

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">getSyncJob</a>(syncId, jobId) -> AirweaveSDK.SyncJob</code></summary>
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
await client.sync.getSyncJob("sync_id", "job_id");
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

<details><summary><code>client.sync.<a href="/src/api/resources/sync/client/Client.ts">getSyncDag</a>(syncId) -> AirweaveSDK.SyncDag</code></summary>
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
await client.sync.getSyncDag("sync_id");
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

## Search

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">search</a>({ ...params }) -> Record<string, unknown>[]</code></summary>
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
    user: The current user

## Returns:

    list[dict]: A list of search results

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

## Chat

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">openaiKeySet</a>() -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Check if the OpenAI API key is set for the current user.

## Args:

    db: The database session.
    user: The current user.

## Returns:

    bool: True if the OpenAI API key is set, False otherwise.

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
await client.chat.openaiKeySet();
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

**requestOptions:** `Chat.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">listChats</a>({ ...params }) -> AirweaveSDK.Chat[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all chats for the current user.

## Args:

    db: The database session.
    skip: The number of chats to skip.
    limit: The number of chats to return.
    user: The current user.

## Returns:

    list[schemas.Chat]: The list of chats.

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

## Args:

    db: The database session.
    chat_in: The chat creation data.
    user: The current user.

## Returns:

    schemas.Chat: The created chat.

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

## Args:

    db: The database session.
    chat_id: The ID of the chat to get.
    user: The current user.

## Returns:

    schemas.Chat: The chat.

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

## Args:

    db: The database session.
    chat_id: The ID of the chat to update.
    chat_in: The chat update data.
    user: The current user.

## Returns:

    schemas.Chat: The updated chat.

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

## Args:

    db: The database session.
    chat_id: The ID of the chat to archive.
    user: The current user.

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

## Args:

    db: The database session.
    chat_id: The ID of the chat to send the message to.
    message: The message to send.
    user: The current user.

## Returns:

    schemas.ChatMessage: The sent message.

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

## Args:

    db: The database session.
    chat_id: The ID of the chat to stream the response for.
    user: The current user.

## Returns:

    StreamingResponse: The streaming response.

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

## Dag

<details><summary><code>client.dag.<a href="/src/api/resources/dag/client/Client.ts">getSyncDag</a>(syncId) -> AirweaveSDK.SyncDag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the DAG definition for a sync.

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
await client.dag.getSyncDag("sync_id");
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

**requestOptions:** `Dag.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dag.<a href="/src/api/resources/dag/client/Client.ts">createSyncDag</a>(syncId, { ...params }) -> AirweaveSDK.SyncDag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new DAG definition for a sync.

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
await client.dag.createSyncDag("sync_id", {
    name: "name",
    syncDagCreateSyncId: "sync_id",
    nodes: [
        {
            type: "source",
            name: "name",
        },
    ],
    edges: [
        {
            fromNodeId: "from_node_id",
            toNodeId: "to_node_id",
        },
    ],
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

**request:** `AirweaveSDK.SyncDagCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dag.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dag.<a href="/src/api/resources/dag/client/Client.ts">updateSyncDag</a>(syncId, { ...params }) -> AirweaveSDK.SyncDag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a DAG definition for a sync.

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
await client.dag.updateSyncDag("sync_id", {
    name: "name",
    syncDagUpdateSyncId: "sync_id",
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

**request:** `AirweaveSDK.SyncDagUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dag.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dag.<a href="/src/api/resources/dag/client/Client.ts">initializeDag</a>({ ...params }) -> AirweaveSDK.SyncDag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Initialize a new DAG with source, entities, and destination.

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
await client.dag.initializeDag({
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

**request:** `AirweaveSDK.InitializeDagDagInitGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dag.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entities

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">listEntityDefinitions</a>() -> AirweaveSDK.EntityDefinition[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all entity definitions for the current user's organization.

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
await client.entities.listEntityDefinitions();
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

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">createEntityDefinition</a>({ ...params }) -> AirweaveSDK.EntityDefinition</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new entity definition.

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
await client.entities.createEntityDefinition({
    name: "name",
    type: "file",
    entitySchema: ["entity_schema"],
    moduleName: "module_name",
    className: "class_name",
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

**request:** `AirweaveSDK.EntityDefinitionCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">updateEntityDefinition</a>(definitionId, { ...params }) -> AirweaveSDK.EntityDefinition</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an entity definition.

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
await client.entities.updateEntityDefinition("definition_id", {
    name: "name",
    type: "file",
    entitySchema: ["entity_schema"],
    moduleName: "module_name",
    className: "class_name",
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

**definitionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.EntityDefinitionUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">listEntityRelations</a>() -> AirweaveSDK.EntityRelation[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all entity relations for the current user's organization.

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
await client.entities.listEntityRelations();
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

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">createEntityRelation</a>({ ...params }) -> AirweaveSDK.EntityRelation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new entity relation.

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
await client.entities.createEntityRelation({
    name: "name",
    fromEntityId: "from_entity_id",
    toEntityId: "to_entity_id",
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

**request:** `AirweaveSDK.EntityRelationCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">updateEntityRelation</a>(relationId, { ...params }) -> AirweaveSDK.EntityRelation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an entity relation.

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
await client.entities.updateEntityRelation("relation_id", {
    name: "name",
    fromEntityId: "from_entity_id",
    toEntityId: "to_entity_id",
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

**relationId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.EntityRelationUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getEntityDefinitionsByIds</a>({ ...params }) -> AirweaveSDK.EntityDefinition[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get multiple entity definitions by their IDs.

Args:
ids: List of entity definition IDs to fetch
db: Database session
current_user: Current authenticated user

Returns:
List of entity definitions matching the provided IDs

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
await client.entities.getEntityDefinitionsByIds(["string"]);
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

**request:** `string[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entities.<a href="/src/api/resources/entities/client/Client.ts">getEntityDefinitionsBySourceShortName</a>({ ...params }) -> AirweaveSDK.EntityDefinition[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all entity definitions for a given source.

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
await client.entities.getEntityDefinitionsBySourceShortName({
    sourceShortName: "source_short_name",
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

**request:** `AirweaveSDK.GetEntityDefinitionsBySourceShortNameEntitiesDefinitionsBySourceGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Transformers

<details><summary><code>client.transformers.<a href="/src/api/resources/transformers/client/Client.ts">listTransformers</a>() -> AirweaveSDK.Transformer[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all transformers for the current user's organization.

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
await client.transformers.listTransformers();
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

**requestOptions:** `Transformers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transformers.<a href="/src/api/resources/transformers/client/Client.ts">createTransformer</a>({ ...params }) -> AirweaveSDK.Transformer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new transformer.

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
await client.transformers.createTransformer({
    name: "name",
    methodName: "method_name",
    moduleName: "module_name",
    inputEntityDefinitionIds: ["input_entity_definition_ids"],
    outputEntityDefinitionIds: ["output_entity_definition_ids"],
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

**request:** `AirweaveSDK.TransformerCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transformers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transformers.<a href="/src/api/resources/transformers/client/Client.ts">updateTransformer</a>(transformerId, { ...params }) -> AirweaveSDK.Transformer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a transformer.

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
await client.transformers.updateTransformer("transformer_id", {
    name: "name",
    methodName: "method_name",
    moduleName: "module_name",
    inputEntityDefinitionIds: ["input_entity_definition_ids"],
    outputEntityDefinitionIds: ["output_entity_definition_ids"],
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

**transformerId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.TransformerUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transformers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CursorDevelopment

<details><summary><code>client.cursorDevelopment.<a href="/src/api/resources/cursorDevelopment/client/Client.ts">checkConnectionStatus</a>(shortName) -> AirweaveSDK.Connection[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Check if a source connection exists for the given short_name.

## Args:

    db: The database session
    short_name: The short name of the source to check
    user: The admin user

## Returns:

    List[schemas.Connection]: List of source connections for the given short_name

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
await client.cursorDevelopment.checkConnectionStatus("short_name");
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

**requestOptions:** `CursorDevelopment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.cursorDevelopment.<a href="/src/api/resources/cursorDevelopment/client/Client.ts">testSync</a>(shortName) -> AirweaveSDK.SyncJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Run a sync for a specific source by short_name.

This endpoint is used for testing source integrations during development.
It finds the first available source connection for the given short_name and
runs a sync on it.

## Args:

    db: The database session
    short_name: The short name of the source to sync
    background_tasks: The background tasks
    user: The admin user

## Returns:

    schemas.SyncJob: The created sync job

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
await client.cursorDevelopment.testSync("short_name");
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

**requestOptions:** `CursorDevelopment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
