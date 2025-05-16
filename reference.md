# Reference

## Sources

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">readSource</a>(shortName) -> AirweaveSDK.SourceWithAuthenticationFields</code></summary>
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

## Collections

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">listCollections</a>({ ...params }) -> AirweaveSDK.Collection[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all collections for the current user's organization.

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
await client.collections.listCollections();
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

**request:** `AirweaveSDK.ListCollectionsCollectionsGetRequest`

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

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">createCollection</a>({ ...params }) -> AirweaveSDK.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new collection.

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
await client.collections.createCollection({
    name: "name",
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

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">getCollection</a>(readableId) -> AirweaveSDK.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific collection by its readable ID.

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
await client.collections.getCollection("readable_id");
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

**readableId:** `string`

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

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">deleteCollection</a>(readableId, { ...params }) -> AirweaveSDK.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a collection by its readable ID.

Args:
readable_id: The readable ID of the collection to delete
delete_data: Whether to delete the data in destinations
db: The database session
current_user: The current user

Returns:
The deleted collection

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
await client.collections.deleteCollection("readable_id");
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

**readableId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.DeleteCollectionCollectionsReadableIdDeleteRequest`

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

Start sync jobs for all source connections in the collection.

Args:
readable_id: The readable ID of the collection
db: The database session
current_user: The current user
background_tasks: Background tasks for async operations

Returns:
A list of created sync jobs

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

**readableId:** `string`

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

## SourceConnections

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">listSourceConnections</a>({ ...params }) -> AirweaveSDK.SourceConnectionListItem[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all source connections for the current user.

Args:
db: The database session
collection: The collection to filter by
skip: The number of connections to skip
limit: The number of connections to return
user: The current user

Returns:
A list of source connection list items with essential information

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
await client.sourceConnections.listSourceConnections();
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

**request:** `AirweaveSDK.ListSourceConnectionsSourceConnectionsGetRequest`

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

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">createSourceConnection</a>({ ...params }) -> AirweaveSDK.SourceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new source connection.

This endpoint creates:

1. An integration credential with the provided auth fields
2. A collection if not provided
3. The source connection
4. A sync configuration and DAG
5. A sync job if immediate execution is requested

Args:
db: The database session
source_connection_in: The source connection to create
user: The current user
background_tasks: Background tasks for async operations

Returns:
The created source connection

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
await client.sourceConnections.createSourceConnection({
    name: "name",
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

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">getSourceConnection</a>(sourceConnectionId, { ...params }) -> AirweaveSDK.SourceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific source connection by ID.

Args:
db: The database session
source_connection_id: The ID of the source connection
show_auth_fields: Whether to show the auth fields, default is False
user: The current user

Returns:
The source connection

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
await client.sourceConnections.getSourceConnection("source_connection_id");
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

**request:** `AirweaveSDK.GetSourceConnectionSourceConnectionsSourceConnectionIdGetRequest`

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

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">updateSourceConnection</a>(sourceConnectionId, { ...params }) -> AirweaveSDK.SourceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a source connection.

Args:
db: The database session
source_connection_id: The ID of the source connection to update
source_connection_in: The updated source connection data
user: The current user

Returns:
The updated source connection

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
await client.sourceConnections.updateSourceConnection("source_connection_id");
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

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">deleteSourceConnection</a>(sourceConnectionId, { ...params }) -> AirweaveSDK.SourceConnection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a source connection and all related components.

Args:
db: The database session
source_connection_id: The ID of the source connection to delete
delete_data: Whether to delete the associated data in destinations
user: The current user

Returns:
The deleted source connection

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
await client.sourceConnections.deleteSourceConnection("source_connection_id");
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

**request:** `AirweaveSDK.DeleteSourceConnectionSourceConnectionsSourceConnectionIdDeleteRequest`

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

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">runSourceConnection</a>(sourceConnectionId) -> AirweaveSDK.SourceConnectionJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Trigger a sync run for a source connection.

Args:
db: The database session
source_connection_id: The ID of the source connection to run
user: The current user
background_tasks: Background tasks for async operations

Returns:
The created sync job

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
await client.sourceConnections.runSourceConnection("source_connection_id");
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

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">listSourceConnectionJobs</a>(sourceConnectionId) -> AirweaveSDK.SourceConnectionJob[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all sync jobs for a source connection.

Args:
db: The database session
source_connection_id: The ID of the source connection
user: The current user

Returns:
A list of sync jobs

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
await client.sourceConnections.listSourceConnectionJobs("source_connection_id");
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
