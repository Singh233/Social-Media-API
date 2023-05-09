# Social-Media-API

👋 Hi, folks checkout the API references below and to see project in action checkout repo https://github.com/Singh233/Social-Web-App and https://sanam.social/ 🚀


## API Reference

#### User registration

```http
  POST /api/v1/users/create
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Your full name |
| `email` | `string` | **Required**. Your email address |
| `password` | `string` | **Required**. |

Returns a token valid for 11 days.

#### User login

```http
  POST /api/v1/users/login
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required**. Your email address |
| `password` | `string` | **Required**. |

Returns a token valid for 11 days.

#### Get user profile

```http
  GET /api/v1/users/profile/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | **Required**. Id of user|

| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Bearer Token |


#### Search users

```http
  GET /api/v1/users/search
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `search` | `string` | **Required**. text you want to search |


| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Bearer Token |

#### Get all friends of a user

```http
  GET /api/v1/users/fetch_user_friends
```

| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Bearer Token |

#### Get all posts
```http
  GET /api/v1/posts
```

#### Create a post

```http
  POST /api/v1/posts/create
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `content` | `string` | **Required**. caption of post |
| `file` | `string` | **Required**. image you want to upload |


| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Bearer Token |


#### Destroy a post

```http
  POST /api/v1/delete/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | **Required**. Post id |

| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Bearer Token |

#### Like post/comment

```http
  POST /api/v1/likes/toggle
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `likeable_id` | `string` | **Required**. id of the post/comment |
| `likeable_type` | `string` | **Required**. type [post, comment] |

| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Bearer Token |

#### Follow a friend

```http
  POST /api/v1/friends/add
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `from_user` | `string` | **Required**. id of the from user |
| `to_user` | `string` | **Required**. id of the to user |

| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Bearer Token |

#### Unfollow a friend

```http
  POST /api/v1/friends/remove
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `from_user` | `string` | **Required**. id of the from user |
| `to_user` | `string` | **Required**. id of the to user |

| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Bearer Token |

#### Comment on a post

```http
  POST /api/v1/comments/create
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `content` | `string` | **Required**. comment content |
| `postId` | `string` | **Required**. id of post |

| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Bearer Token |

#### Destroy comment on a post

```http
  POST /api/v1/comments/destroy/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | **Required**. id of comment |

| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Bearer Token |

#### Join a chatroom

```http
  GET /api/v1/chat/:type/:sender/:receiver/:chatRoomId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `type` | `string` | **Required**. type of a chatroom [private, global] |
| `sender` | `string` | **Required**. id of sender |
| `receiver` | `string` | **Required**. id of receiver |
| `chatRoomId` | `string` | **Required**. id of chatroom |

#### Send message

```http
  POST /api/v1/chat/createmessage/:message/:type/:sender/:receiver/:chatRoomId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `message` | `string` | **Required**. content |
| `type` | `string` | **Required**. type of a chatroom [private, global] |
| `sender` | `string` | **Required**. id of sender |
| `receiver` | `string` | **Required**. id of receiver |
| `chatRoomId` | `string` | **Required**. id of chatroom |
