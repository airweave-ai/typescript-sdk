# Reference

## sources

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

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">get</a>(shortName) -> AirweaveSDK.Source</code></summary>
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
await client.sources.get("short_name");
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

## collections

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">list</a>({ ...params }) -> AirweaveSDK.Collection[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all collections that belong to your organization with optional search filtering.

Collections are always sorted by creation date (newest first).

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
await client.collections.list({
    skip: 1,
    limit: 1,
    search: "search",
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

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">searchGetLegacy</a>(readableId, { ...params }) -> AirweaveSDK.LegacySearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Legacy GET search endpoint for backwards compatibility.

DEPRECATED: This endpoint uses the old schema. Please migrate to POST with the new
SearchRequest format for access to all features.

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
await client.collections.searchGetLegacy("readable_id", {
    query: "query",
    response_type: "raw",
    limit: 1,
    offset: 1,
    recency_bias: 1.1,
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

**request:** `AirweaveSDK.SearchGetLegacyCollectionsReadableIdSearchGetRequest`

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

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">search</a>(readableId, { ...params }) -> AirweaveSDK.SearchCollectionsReadableIdSearchPostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search your collection.

Accepts both new SearchRequest and legacy LegacySearchRequest formats
for backwards compatibility.

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

**readableId:** `string` — The unique readable identifier of the collection

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.SearchCollectionsReadableIdSearchPostRequest`

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
await client.sourceConnections.list({
    collection: "collection",
    skip: 1,
    limit: 1,
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

sync_immediately defaults:

- True for: direct, oauth_token, auth_provider
- False for: oauth_browser, oauth_byoc (these sync after authentication)
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

<details><summary><code>client.sourceConnections.<a href="/src/api/resources/sourceConnections/client/Client.ts">run</a>(sourceConnectionId, { ...params }) -> AirweaveSDK.SourceConnectionJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Trigger a sync run for a source connection.

Runs are always executed through Temporal workflow engine.

Args:
db: Database session
source_connection_id: ID of the source connection to run
ctx: API context with organization and user information
guard_rail: Guard rail service for usage limits
force_full_sync: If True, forces a full sync with orphaned entity cleanup
for continuous syncs. Raises 400 error if used on
non-continuous syncs (which are always full syncs).

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
await client.sourceConnections.run("source_connection_id", {
    force_full_sync: true,
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

**sourceConnectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.RunSourceConnectionsSourceConnectionIdRunPostRequest`

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
await client.sourceConnections.getSourceConnectionJobs("source_connection_id", {
    limit: 1,
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

This endpoint requests cancellation and marks the job as CANCELLING.
The workflow updates the final status to CANCELLED when it processes
the cancellation request.

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

## events

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">getMessages</a>({ ...params }) -> AirweaveSDK.MessageOut[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get event messages for the current organization.

Args:
ctx: The API context containing organization info.
event_types: Optional list of event types to filter by.

Returns:
List of event messages.

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
await client.events.getMessages();
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

**request:** `AirweaveSDK.GetMessagesEventsMessagesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">getMessage</a>(messageId) -> AirweaveSDK.MessageOut</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific event message by ID.

Args:
message_id: The ID of the message to retrieve.
ctx: The API context containing organization info.

Returns:
The event message with its payload.

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
await client.events.getMessage("message_id");
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

**messageId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">getMessageAttempts</a>(messageId) -> AirweaveSDK.MessageAttemptOut[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get delivery attempts for a specific message.

Args:
message_id: The ID of the message.
ctx: The API context containing organization info.

Returns:
List of delivery attempts for this message.

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
await client.events.getMessageAttempts("message_id");
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

**messageId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">getSubscriptions</a>() -> AirweaveSDK.EndpointOut[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all webhook subscriptions for the current organization.

Args:
ctx: The API context containing organization info.

Returns:
List of webhook subscriptions.

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
await client.events.getSubscriptions();
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

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">createSubscription</a>({ ...params }) -> AirweaveSDK.EndpointOut</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new webhook subscription.

Args:
request: The subscription creation request.
ctx: The API context containing organization info.

Returns:
The created subscription.

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
await client.events.createSubscription({
    url: "url",
    event_types: ["sync.pending"],
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

**request:** `AirweaveSDK.CreateSubscriptionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">getSubscription</a>(subscriptionId) -> AirweaveSDK.SubscriptionWithAttemptsOut</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific webhook subscription with its delivery attempts.

Args:
subscription_id: The ID of the subscription to retrieve.
ctx: The API context containing organization info.

Returns:
The subscription details with message delivery attempts.

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
await client.events.getSubscription("subscription_id");
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

**subscriptionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">deleteSubscription</a>(subscriptionId) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a webhook subscription.

Args:
subscription_id: The ID of the subscription to delete.
ctx: The API context containing organization info.

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
await client.events.deleteSubscription("subscription_id");
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

**subscriptionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">patchSubscription</a>(subscriptionId, { ...params }) -> AirweaveSDK.EndpointOut</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a webhook subscription.

Args:
subscription_id: The ID of the subscription to update.
request: The subscription update request.
ctx: The API context containing organization info.

Returns:
The updated subscription.

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
await client.events.patchSubscription("subscription_id");
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

**subscriptionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.PatchSubscriptionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">enableSubscription</a>(subscriptionId, { ...params }) -> AirweaveSDK.EndpointOut</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enable a disabled webhook subscription, optionally recovering failed messages.

Args:
subscription_id: The ID of the subscription to enable.
request: Optional request with recovery time range.
ctx: The API context containing organization info.

Returns:
The enabled subscription.

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
await client.events.enableSubscription("subscription_id");
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

**subscriptionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.EnableEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">getSubscriptionSecret</a>(subscriptionId) -> AirweaveSDK.EndpointSecretOut</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the signing secret for a webhook subscription.

Args:
subscription_id: The ID of the subscription.
ctx: The API context containing organization info.

Returns:
The subscription's signing secret.

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
await client.events.getSubscriptionSecret("subscription_id");
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

**subscriptionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">recoverFailedMessages</a>(subscriptionId, { ...params }) -> AirweaveSDK.RecoverOut</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Recover (retry) failed messages for a webhook subscription.

This endpoint triggers a recovery of all failed messages since the specified
time. Useful after re-enabling a disabled endpoint to retry messages that
failed while the endpoint was down.

Args:
subscription_id: The ID of the subscription to recover messages for.
request: The recovery request with time range.
ctx: The API context containing organization info.

Returns:
Information about the recovery task.

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
await client.events.recoverFailedMessages("subscription_id", {
    since: "2024-01-15T09:30:00Z",
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

**subscriptionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `AirweaveSDK.RecoverMessagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
