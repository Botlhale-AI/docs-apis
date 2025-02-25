---
sidebar_position: 2
---

# Chatbot APIs

## Endpoint: `/start_conversation`

```
https://api.botlhale.xyz/start_conversation
```

:::tip
> You need to include an `Authentication Token` in request headers. See the [Authentication](API.md#authentication) page of this documentation for information on how to generate authentication token codes.
:::

**Method:**`POST`

This endpoint initiates a new conversation or continues an existing one by generating or validating a `conversation_id`.

#### Authentication

A valid **Bearer token** must be included in the request headers for authentication.

  **Headers:**
  - **Authorization:** Bearer `<your_token>`



| Request Params | Type   | Data Type | Description                                              |
|----------------|--------|-----------|----------------------------------------------------------|
| bot_id        | string | Required  |  Specifies which bot the conversation is associated with.   |
| language_code   | string | Required  | The language code for the conversation. |
| conversation_id | string | Optional  | A unique ID to track the conversation. Auto-generated if not provided. |
| user_id          | string | Optional  | Defaults to `conversation_id` if not provided.                  |
| platform       | string | Optional  |  Defaults to `API` if not provided.|



#### Response

**The API returns a JSON object with the following structure:**

```
Unset
{
    "conversation_id": "54i2IE3Qdv50",
    "language_code": "English",
    "user_id": "54i2IE3Qdv50"
}


```
**Fields:**

| Request Params | Data Type | Description |
| ------------- | ------------- | ------------- |
| conversation_id  | `string` |  The unique ID for the conversation. | 
|user_id  | `string` |   The user ID associated with the conversation.| 
| language_code  | `integer` |  The language code for the conversation |
| platform   | `string` |  The platform from which the request originated.|


## Endpoint: `/message`

```bash
https://api.botlhale.xyz/message
```

:::tip
> You need to include an `Authentication Token` in request headers. See the [Authentication](API.md#authentication) page of this documentation for information on how to generate authentication token codes.
:::

**Method:**`POST`

This endpoint handles user messages and returns the bot's response in JSON format. It supports different message types such as text, image, PDF, and speech.

#### Authentication

A valid **Bearer token** must be included in the request headers for authentication.

**Headers:**

- **Authorization:** Bearer `<your_token>`

| Request Params | Type   | Data Type | Description                                              |
|----------------|--------|-----------|----------------------------------------------------------|
| bot_id        | string | **Required**  |  Specifies which bot the message should be sent to.   |
| language_code   | string | **Required**  |  The language the user is using to interact with the bot. |
| conversation_id | string | **Required**  | A unique ID to keep track of different conversations. |
| message_type          | string | **Optional**  |  Specifies the type of user message. Supported values:'text','image','pdf' and 'speech'.|
| response_type  | string | **Optional**  |  Specifies the desired response format. Supported values:'text' and 'speech'.|
| text_msg  | string | **Required** if message_type is `text`|   The text message from the user to the bot.|
|image_url  | string | **Required** if message_type is `image`|  The URL of the image to be processed.|
| pdf_url  | string | **Required** if message_type is `pdf`|   The URL of the PDF to be processed.|
| platform  | string | **Optional** |    Defaults to 'API' if not provided.|
| user_id  | string | **Optional** |   Defaults to the conversation_id if not provided.|
| speech_file  | file | **Required** if message_type is `speech`|  The binary audio file of the user's message.|


**Request Example**

<Tabs>
<TabItem value="py" label="Python" default>

```python 
import requests

url = "https://api-dev.botlhale.xyz/start_conversation"

payload = {'language_code': 'en-ZA',
'BotID': '{{BotID}}'}
files=[

]
headers = {}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```


</TabItem>
<TabItem value="bash" label="Bash" >

```bash 
curl --location 'https://api-dev.botlhale.xyz/start_conversation' \
--form 'language_code="en-ZA"' \
--form 'BotID="{{BotID}}"'
```


</TabItem>
<TabItem value="js" label="JavaScript" >

```javascript 
const formdata = new FormData();
formdata.append("language_code", "en-ZA");
formdata.append("BotID", "{{BotID}}");

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("https://api-dev.botlhale.xyz/start_conversation", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```


</TabItem>
<TabItem value="nodejs" label="Node JS - Native">

```js
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'api-dev.botlhale.xyz',
  'path': '/start_conversation',
  'headers': {
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"language_code\"\r\n\r\nen-ZA\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"BotID\"\r\n\r\n{{BotID}}\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```

</TabItem>
</Tabs>

**Text - Text example request**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
<TabItem value="py" label="Python">

```python 
import requests

url = "https://api.botlhale.xyz/message"

payload={'bot_id ': "<bot_id >",
'language_code': 'English',
'conversation_id': "<conversation_id>",
'message_type': 'text',
'response_type': 'text',
'text_msg': 'text'}
files=[

]
headers = {"Authorization": "Bearer <your_token>"}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```

</TabItem>
<TabItem value="bash" label="Bash" default>

```bash 
curl --location --request POST 'https://api.botlhale.xyz/message' \
-H "Authorization: Bearer <IdToken>" \
--form 'bot_id="<bot_id>"' \
--form 'language_code="English"' \
--form 'conversation_id="<conversation_id>"' \
--form 'message_type="text"' \
--form 'response_type="text"' \
--form 'text_msg="text"'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript 
var formdata = new FormData();
formdata.append("bot_id", "<bot_id>");
formdata.append("language_code ", "English");
formdata.append("conversation_id", "<conversation_id>");
formdata.append("message_type", "text");
formdata.append("response_type", "text");
formdata.append("text_msg", "text");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
  headers: {"Authorization": "Bearer <IdToken>"}
  
};

fetch("https://api.botlhale.xyz/message", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```


</TabItem>
<TabItem value="nodejs" label="Node JS - Native">

```js
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'https://api.botlhale.xyz',
  'path': '/message',
  'headers': {
    "Authorization": "Bearer <your_token>"
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"bot_id\"\r\n\r\nYPBDDDGASKSEVTHT\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"language_code\"\r\n\r\nEnglish\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"conversation_id\"\r\n\r\np52C32Li4xx5\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"message_type\"\r\n\r\ntext\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"response_type\"\r\n\r\ntext\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"text_msg\"\r\n\r\nhello\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```
</TabItem>
</Tabs>


**Response body**

```json
{
    "bot_id": "XYQKZMXTQCBZHLMT",
    "buttons": [
        {
            "payload": "/customer_support",
            "title": "Customer Service"
        },
        {
            "payload": "/setup_shop",
            "title": "Set Up Shop"
        },
        {
            "payload": "/about_us",
            "title": "About Us"
        }
    ],
    "confidence": "0.9999995231628418",
    "conversation_id": "54i2IE3Qdv50",
    "custom": "",
    "date_received": "20/02/2025 08:32:54",
    "entities": [],
    "intent": "greet",
    "language_code": "English",
    "message_id": "54i2IE3Qdv50_t7h6234MPSM8",
    "text_msg": "Hello",
    "text_response": [
        "Hello, **!\n\n🌟 Welcome to EaziThenga's WhatsApp Support Line! 🌟\n\nI'm Susan, your friendly EaziThenga's Support Bot, and I'm working here alongside our customer support team. Together, we're here to ensure you get fast, accurate, and friendly assistance!.\n\n You can chat with me using text or voice notes. If there's anything complex or sensitive that I can't handle, our agents will step in to ensure you're well taken care of! 🚀\n\n How may I assist you today?"
    ],
    "user_id": "54i2IE3Qdv50"
}
```

**Text - Speech example request**


<Tabs>
<TabItem value="py" label="Python">

```python 
import requests

url = "https://api.botlhale.xyz/startConversation"

payload={
  'bot_id': '<bot_id>',
  'language_code': 'English'
  }
  
files=[

]
headers = {"Authorization": "Bearer <your_token>"}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)

```

</TabItem>
<TabItem value="bash" label="Bash" default>

```bash 
curl --location --request POST 'https://api.botlhale.xyz/message' \
-H "Authorization: Bearer <your_token>"
--form 'bot_id ="<bot_id>"' \
--form 'language_code="English"' \
--form 'conversation_id="<conversation_id>"' \
--form 'message_type="text"' \
--form 'response_type="speech"' \
--form 'text_msg="text"'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript 
var formdata = new FormData();
formdata.append("bot_id", "<bot_id >");
formdata.append("language_code", "English");
formdata.append("conversation_id", "<conversation_id>");
formdata.append("message_type", "text");
formdata.append("response_type", "speech");
formdata.append("text_msg", "text");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
  headers: {"Authorization": "Bearer <<your_token>"}
};

fetch("https://api.botlhale.xyz/message", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

</TabItem>
<TabItem value="nodejs" label="Node JS - Native">

```js
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'https://api.botlhale.xyz',
  'path': '/message',
  'headers': {
    "Authorization": "Bearer <<your_token>",
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"bot_id\"\r\n\r\nYPBDDDGASKSEVTHT\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"language_code\"\r\n\r\nEnglish\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"conversation_id\"\r\n\r\np52C32Li4xx5\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"message_type\"\r\n\r\ntext\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"response_type\"\r\n\r\nspeech\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"text_msg\"\r\n\r\nhello\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```
</TabItem>
</Tabs>

**Speech - Text example request**

<Tabs>
<TabItem value="py" label="Python">

```python 
import requests

url = "https://api.botlhale.xyz/message"

payload={'bot_id': "<bot_id>",
'language_code': 'English',
'conversation_id': "<conversation_id>",
'message_type': 'speech',
'response_type': 'text'}
files=[
  ('SpeechFile',('bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav',open('6d97n7nJf/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav','rb'),'audio/wav'))
]
headers = {"Authorization": "Bearer <IdToken>"}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)

```

</TabItem>
<TabItem value="bash" label="Bash" default>

```bash 
curl --location --request POST 'https://api.botlhale.xyz/message' \
-H "Authorization: Bearer <your_token>" \
--form 'bot_id="<bot_id>"' \
--form 'language_code="English"' \
--form 'conversation_id="<conversation_id>"' \
--form 'message_type="speech"' \
--form 'response_type="text"' \
--form 'speech_file=@"6d97n7nJf/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav"'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript 
var formdata = new FormData();
formdata.append("bot_id ", "<bot_id >");
formdata.append("language_code", "English");
formdata.append("conversation_id", "<conversation_id>");
formdata.append("message_type", "speech");
formdata.append("response_type", "text");
formdata.append("speech_file", fileInput.files[0], "[PROXY]");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
  headers: {"Authorization": "Bearer <IdToken>"}
};

fetch("https://api.botlhale.xyz/message", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

</TabItem>
<TabItem value="nodejs" label="Node JS - Native">

```js
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'https://api.botlhale.xyz',
  'path': '/message',
  'headers': {
   "Authorization": "Bearer <your_token>"
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"bot_id\"\r\n\r\ndshfgjdsgfd\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"language_code\"\r\n\r\nEnglish\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"conversation_id\"\r\n\r\nfdgsgfd\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"message_type\"\r\n\r\nspeech\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"response_type\"\r\n\r\ntext\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"SpeechFile\"; filename=\"[PROXY]\"\r\nContent-Type: \"{Insert_File_Content_Type}\"\r\n\r\n" + fs.readFileSync('6d97n7nJf/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav') + "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```

</TabItem>
</Tabs>

**Speech - Speech example request**


<Tabs>
<TabItem value="py" label="Python">

```python 
import requests

url = "https://api.botlhale.xyz/message"

payload={'bot_id': "<bot_id>",
'language_code': 'English',
'conversation_id': "<conversation_id>",
'message_type': 'speech',
'response_type': 'text'}
files=[
  ('speech_file',('bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav',open('jD-GB99E5/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav','rb'),'audio/wav'))
]
headers = {"Authorization": "Bearer <your_token>"}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```

</TabItem>
<TabItem value="bash" label="Bash" default>

```bash 
curl --location --request POST 'https://api.botlhale.xyz/message' \
-H "Authorization: Bearer <your_token>" \
--form 'bot_id="<bot_id>"' \
--form 'language_code="English"' \
--form 'conversation_id="<conversation_id>"' \
--form 'message_type="speech"' \
--form 'response_type="text"' \
--form 'speech_file=@"jD-GB99E5/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav"'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript 
var formdata = new FormData();
formdata.append("bot_id", "<bot_id>");
formdata.append("language_code", "English");
formdata.append("conversation_cd", "<conversation_id>");
formdata.append("message_type", "speech");
formdata.append("response_type", "text");
formdata.append("speech_file", fileInput.files[0], "[PROXY]");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
  headers: {"Authorization": "Bearer <your_token>"}
};

fetch("https://api.botlhale.xyz/message", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

</TabItem>
<TabItem value="nodejs" label="Node JS - Native">

```js
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'https://api.botlhale.xyz',
  'path': '/message',
  'headers': {
     "Authorization": "Bearer <your_token>"
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"bot_id\"\r\n\r\ndshfgjdsgfd\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"language_code\"\r\n\r\nEnglish\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"conversation_id\"\r\n\r\nfdgsgfd\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"message_type\"\r\n\r\nspeech\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"response_type\"\r\n\r\ntext\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"SpeechFile\"; filename=\"[PROXY]\"\r\nContent-Type: \"{Insert_File_Content_Type}\"\r\n\r\n" + fs.readFileSync('jD-GB99E5/bot_YPBDDDGASKSEVTHT_English_V5v5DS992s.wav') + "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();
```
</TabItem>
</Tabs>



**Fields:**

| Request Params | Data Type | Description |
| ------------- | ------------- | ------------- |
| text_msg | `string` |  The text message from the user (if `message_type` is 'text'). | 
|transcription   | `string` |   The transcribed text from the speech input (if `message_type` is 'speech').| 
| speech_response_url  | `string` | The **URL** of the bot’s speech response (**valid for 24 hours**, if `response_type` is 'speech'). |
| message_id | `string` | The unique identifier for the message.|
| conversation_id  | `string` |  The unique ID tracking the conversation. |
| user_id  | `string` |  The user ID associated with the conversation. |
| bot_id  | `string` |  The bot that received the message. |
| language_code  | `string` |   The language in which the conversation is taking place. |
| date_received  | `string` |    The date and time when the request was received, in ISO 8601 format. |
| text_response  | `string` |    The bot's text response to the user. |
| intent  | `string` |    The detected intent of the user’s message. |
|entities  | `list` |    Any extracted entities from the user’s message. |
|buttons  | `list` |    Any interactive buttons provided in the bot’s response. |
|confidence  |`string` |   The confidence score of the detected intent. |
|custom  |`dict` |    Any additional custom fields returned by the bot. |


## Contact us

:::info
We are here to help! Please [contact us](mailto:support@botlhale.ai) with any questions.
::: -->
