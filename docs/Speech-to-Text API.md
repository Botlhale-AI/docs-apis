---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Speech-to-Text API

This page outlines the fundamentals of using the Speech-to-Text API. Covered in this page is information on the 
types of requests you can make using Speech-to-Text, how to construct those requests, and how to handle their 
responses. It's recommended that you read this page in its entirety before diving into the Speech API.

**Speech Requests**

Speech-to-Text has two main methods of performing speech recognition. These are listed and described as follows:

#### Synchronous Requests

With synchronous requests (REST), audio data is sent to the Speech-to-Text API, recognition is performed on that
 data, and results are returned once all audio has been processed. Synchronous recognition requests are limited 
to audio data of 1 minute or less in duration.


|Request Type | Audio Length Limit |
| ------------- | ------------- |
| Synchronous Request  | `≤ 60 seconds` | 
| Asynchronous Request  | `≤ 400 minutes` |


**Supported formats**

* `File Type` - We currently only support **wav, amr, flac, and ogg.** audio files.

* `Sample Rate` - We support all sample rates between 8 000 Hz and 48 000 Hz. If you can choose the sample rate of the source, record the audio at 16 000 Hz. This is because sample rates below that might affect the accuracy of our models, and sample rates above 16 000 Hz have no significant impact on the accuracy of our models. 


# Speech-to-Text API

### Synchronous Request

Synchronous recognition requests are the simplest means of performing recognition on speech audio data. 
The Speech-to-Text API can process up to 1 minute of speech audio data sent in a synchronous request. 
After the Speech-to-Text API processes and recognizes all of the audio, it returns a response. A sample 
request is shown in the section that follows:


## Endpoint: `/asr`

```bash
https://api.botlhale.xyz/asr
```
:::tip
> You need to include an `Authentication Token` in request headers. See the [Authentication](API.md#authentication) page of this documentation for information on how to generate authentication token codes.
:::

**Method: POST**

This endpoint processes speech files for Automatic Speech Recognition **(ASR)**. It transcribes spoken language into text and returns the transcription. The audio file is also temporarily stored and uploaded to an S3 bucket, with the S3 file name included in the response.

#### Authentication

A valid **Bearer token** must be included in the request headers for authentication.

**Headers:**
- Authorization: Bearer `<your_token>`
#### Form Arguments

Request Params |File Type | | Description |
| ------------- | ------------- | ------------- | ------------- |
| speech_file  | `File`  | **Required** |  The audio file to be transcribed.| 
| redact | `bool`  | **Optional** | The sample rate of the supplied audio clip in hertz, for example, 8kHz rendered as 8 000.|
| language_code  | `String`  | **Optional** |  The language code of the spoken language in the audio file. If not provided, automatic language detection will be attempted. |



<!-- **Request Example**

<Tabs>
<TabItem value="py" label="Python" default>

```py
import requests

url = "https://api-dev.botlhale.xyz/asr"

payload = {'language_code': 'zu-ZA',
'sample_rate': '16000'}
files=[
  ('speech_file',('tts_aw215n3s4ni4_IsiZulu_H127Bqf8aN08.wav',open('0zanOkguS/tts_aw215n3s4ni4_IsiZulu_H127Bqf8aN08.wav','rb'),'audio/wav'))
]
headers = {}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)

```

</TabItem>
<TabItem value="bash" label="Bash">

```js 
curl --location 'https://api-dev.botlhale.xyz/asr' \
--form 'language_code="zu-ZA"' \
--form 'sample_rate="16000"' \
--form 'speech_file=@"0zanOkguS/tts_aw215n3s4ni4_IsiZulu_H127Bqf8aN08.wav"'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
const formdata = new FormData();
formdata.append("language_code", "zu-ZA");
formdata.append("sample_rate", "16000");
formdata.append("speech_file", fileInput.files[0], "[PROXY]");

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("https://api-dev.botlhale.xyz/asr", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

</TabItem>
<TabItem value="nodejs" label="NodeJs - Request">

```js
var request = require('request');
var fs = require('fs');
var options = {
  'method': 'POST',
  'url': 'https://api-dev.botlhale.xyz/asr',
  'headers': {
  },
  formData: {
    'language_code': 'zu-ZA',
    'sample_rate': '16000',
    'speech_file': [
      fs.createReadStream('0zanOkguS/tts_aw215n3s4ni4_IsiZulu_H127Bqf8aN08.wav')
    ]
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

```

</TabItem>
</Tabs> -->


**Response body**

The API returns a JSON object with the following structure:
```json
{
    "audio_length": 3.3467120181405896,
    "date_received": "20/02/2025 14:23:08",
    "id": "N5bliIh2i7MP9K5",
    "language_code": "en-ZA",
    "redacted_transcription": "The stale smell of old beer lingers.",
    "speech_file": "asr_97s48SiZ98Gj_en-ZA__r242Sh8A4D2T.wav",
    "text": " The stale smell of old beer lingers.",
    "time": 1.5026299953460693
}
```
**Fields:**

| Request Params | Data Type | Description |
| ------------- | ------------- | ------------- |
| transcription  | `string` |  The transcribed text from the speech file. | 
| s3_filename  | `string` |  The name of the uploaded file in the S3 bucket.| 
| date_received  | `string` | The timestamp when the request was processed, in ISO 8601 format. |



## Speech to Text endpoints (async)

### Asynchronous Request

Asynchronous recognition requests are another means of performing recognition on speech audio data. This request 
type requires you to first upload the audio file to our server for the asynchronous process to start. The asynchronous request initiates an asynchronous operation and returns this operation immediately. Asynchronous speech recognition can be used for audio data with a length of up to 400 minutes.

## Endpoint `/asr/async/upload`

```bash
https://api.botlhale.xyz/asr/async/upload
```

:::tip
> You need to include an `Authentication Token` in request headers. See the [Authentication](API.md#authentication) page of this documentation for information on how to generate authentication token codes.
:::

**Method: POST**

This endpoint generates a **presigned URL** that allows users to upload a speech file for asynchronous **Automatic Speech Recognition (ASR)** processing. Once the file is uploaded, it will be processed asynchronously, and a notification can be sent to a specified URL when the transcription is complete.

#### Authentication
A valid **Bearer token** must be included in the request headers.

**Headers:**

- **Authorization:** Bearer `<your_token>`

#### 
Form Arguments
| Request Params | File Type | | Description |
| ------------- | ------------- | ------------- | ------------- |
| org_id  | `String`  | **Required** |The unique identifier for the organization making the request. |
| language_code  | `string`  | **Optional** |The language spoken in the supplied audio clip. If not provided, the language will be auto-detected.|
| sample_rate  | `integer`  | **Optional**,default: 16000 |The sample rate of the supplied audio clip in hertz.|
| diarization | `Boolean`  |**Optional**,default: False | Whether to use speaker diarization to differentiate between multiple speakers.|
| voice_id | `String`  |**Optional** | A unique identifier for the speaker, if applicable.|
| notify_url | `String`  |**Optional** |A URL to notify once the ASR processing is complete.|

**Request Body**

```
{
    "fields": {
        "key": "BotlhaleAI999/asr_203vpAc0el98__16000_BotlhaleAI999__False__i74Y1R29J5lo21022025_081733.wav",
        "policy": "eyJleHBpcmF0aW9uIjogIjIwMjUtMDItMjFUMDc6MTc6MzRaIiwgImNvbmRpdGlvbnMiOiBbeyJidWNrZXQiOiAiYm90bGhhbGUtYXBpLWFzci1hc3luYy13ZXN0LWRldiJ9LCB7ImtleSI6ICJCb3RsaGFsZUFJOTk5L2Fzcl8yMDN2cEFjMGVsOThfXzE2MDAwX0JvdGxoYWxlQUk5OTlfX0ZhbHNlX19pNzRZMVIyOUo1bG8yMTAyMjAyNV8wODE3MzMud2F2In0sIHsieC1hbXotYWxnb3JpdGhtIjogIkFXUzQtSE1BQy1TSEEyNTYifSwgeyJ4LWFtei1jcmVkZW50aWFsIjogIkFTSUEyQURNUFY3RUJJSUlBM1VSLzIwMjUwMjIxL2V1LXdlc3QtMS9zMy9hd3M0X3JlcXVlc3QifSwgeyJ4LWFtei1kYXRlIjogIjIwMjUwMjIxVDA2MTczNFoifSwgeyJ4LWFtei1zZWN1cml0eS10b2tlbiI6ICJJUW9KYjNKcFoybHVYMlZqRUtmLy8vLy8vLy8vL3dFYUNXVjFMWGRsYzNRdE1TSkhNRVVDSVFEYkJZMENqY2pIV1J4djdFYnJLV08vWVRacVdCWkF1YXpjdGRNMVRLNUc5QUlnUHA4Yi9zc29zclc1QTRXakl6ZEVZb3drcS84SXhjN0wreE56L1k4ck9hc3F2QU1Jei8vLy8vLy8vLy8vQVJBRkdndzJPRGMwTWpJeU9EYzRNVFlpREdjNGh3cHJHa3hjeVd6U1FpcVFBK3MzdkY4clcvYUR0NmR1bHFXd0FhNGFrWmpzS0xXTG9udUhDZ2JYQ0FKaFRQNG5kSFBKQ2JmTGd5UnJzcnVMWHdWdmpUcXhlNXpydDVXbEw0eWtUeWtETnRwQjBHOUJldEtLdit6L0dGMGsrN1ZvTUQ0RERWTVVhL3FENitFbGk2RXR2OGMxdjBTNFJDRDRTNWRCMHU4d2tURSszakV3cXNIWktLR1pzN1l1OWdlRWhCcFcvc1VCRUtqak94dmcwbkhweGlrcUt0Nko1V3lNQlhCRFdQWEl3WXliTjJPVTN4dTlqSi95ckFFMktJZU1IeUxFUkwxKzR6Y01FOE5BME83d2syc0dkZy9wUHRHZXpLZjRQeU4wYzhFQTV1cnNDMjRhbE5Vc3hwMXRSbERXRVlDWC9YRHZWZnZaUG01aktnbHRXUS9JYWRxdzFnNXRXQWlTVVU5VjhqaUx6OExPN2hjQzZBbzBDTFY2SEUrSkI3eTFHazE4cGZHeFR1c1dXN081SDR3aGRGUUxVbFlseERFaUJnRjVlOXFSblhtZW5pVGttbmEyQ3RFbWljOFVYMDVmN0FyUVFaLy80TGZJeXJPV3lHV21mam12SFdYVDJpT1F2SFhxWkdTU29nYkR5cmRwQ2NucVJIQXNYQVZNSHVBbGV2dVc4LzE0STZreXZUaEc5MWppVDd3dXY2YjNickhKai9Jdys3VGd2UVk2bmdGZGtCbktyMEthYm16WDFVNXVqUXlUTnQrNSt2TzIxdjRZTi9DVHNmb3k1R3lsSnV1OXlIdWEwWEJldHVNcDNzdjdNSS8wWHFxZ1kzZ1ZJcGlvdDNxd0hnM0pEelp2bG9QZWt6NERvVU02YXRFaDVLRndZSFhieHhYeU5xL2VlRHBNV2czSkRUcGxuZG5LcVk5c1E2UXhiY0t2bUNJd3plc0JZYlFnWTVXdysxd0cvTXFVM0tuS2c0cWRwaUF3dU11eTcvTFRZdm1VR1BNV2dxeDFIdz09In1dfQ==",
        "x-amz-algorithm": "AWS4-HMAC-SHA256",
        "x-amz-credential": "ASIA2ADMPV7EBIIIA3UR/20250221/eu-west-1/s3/aws4_request",
        "x-amz-date": "20250221T061734Z",
        "x-amz-security-token": "IQoJb3JpZ2luX2VjEKf//////////wEaCWV1LXdlc3QtMSJHMEUCIQDbBY0CjcjHWRxv7EbrKWO/YTZqWBZAuazctdM1TK5G9AIgPp8b/ssosrW5A4WjIzdEYowkq/8Ixc7L+xNz/Y8rOasqvAMIz///////////ARAFGgw2ODc0MjIyODc4MTYiDGc4hwprGkxcyWzSQiqQA+s3vF8rW/aDt6dulqWwAa4akZjsKLWLonuHCgbXCAJhTP4ndHPJCbfLgyRrsruLXwVvjTqxe5zrt5WlL4ykTykDNtpB0G9BetKKv+z/GF0k+7VoMD4DDVMUa/qD6+Eli6Etv8c1v0S4RCD4S5dB0u8wkTE+3jEwqsHZKKGZs7Yu9geEhBpW/sUBEKjjOxvg0nHpxikqKt6J5WyMBXBDWPXIwYybN2OU3xu9jJ/yrAE2KIeMHyLERL1+4zcME8NA0O7wk2sGdg/pPtGezKf4PyN0c8EA5ursC24alNUsxp1tRlDWEYCX/XDvVfvZPm5jKgltWQ/Iadqw1g5tWAiSUU9V8jiLz8LO7hcC6Ao0CLV6HE+JB7y1Gk18pfGxTusWW7O5H4whdFQLUlYlxDEiBgF5e9qRnXmeniTkmna2CtEmic8UX05f7ArQQZ//4LfIyrOWyGWmfjmvHWXT2iOQvHXqZGSSogbDyrdpCcnqRHAsXAVMHuAlevuW8/14I6kyvThG91jiT7wuv6b3brHJj/Iw+7TgvQY6ngFdkBnKr0KabmzX1U5ujQyTNt+5+vO21v4YN/CTsfoy5GylJuu9yHua0XBetuMp3sv7MI/0XqqgY3gVIpiot3qwHg3JDzZvloPekz4DoUM6atEh5KFwYHXbxxXyNq/eeDpMWg3JDTplndnKqY9sQ6QxbcKvmCIwzesBYbQgY5Ww+1wG/MqU3KnKg4qdpiAwuMuy7/LTYvmUGPMWgqx1Hw==",
        "x-amz-signature": "e3cca032a465e57b837b5d2de1030bbe9e195923291817e7649dd5dec4f16546"
    },
    "url": "https://botlhale-api-asr-async-west-dev.s3.amazonaws.com/"
}
```

<!-- <Tabs>
<TabItem value="py" label="Python" default>

```py
import requests

url = "https://api-dev.botlhale.xyz/asr/async/upload"

payload = {'SampleRate': '16000',
'Diarization': 'True'}
files=[

]
headers = {}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)

```

</TabItem>
<TabItem value="bash" label="Bash" >

```js 
curl --location 'https://api-dev.botlhale.xyz/asr/async/upload' \
--form 'SampleRate="16000"' \
--form 'Diarization="True"'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
const formdata = new FormData();
formdata.append("SampleRate", "16000");
formdata.append("Diarization", "True");

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("https://api-dev.botlhale.xyz/asr/async/upload", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

</TabItem>
<TabItem value="nodejs" label="Node JS - Request">

```js
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api-dev.botlhale.xyz/asr/async/upload',
  'headers': {
  },
  formData: {
    'SampleRate': '16000',
    'Diarization': 'True'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

```

</TabItem>
</Tabs>


**Response body**


```json
{
    "fields": {
        "AWSAccessKeyId": "<AWSAccessKeyId>",
        "key": "asr_h1754Le80Gun__16000_1_7Pf1jL54um46.wav",
        "policy": "<policy>",
        "signature": "<signature>",
        "x-amz-security-token": "<x-amz-security-token>"
    },
    "url": "<url>"
}
``` -->


**Upload via Presigned URL**

The generated presigned URL includes both a URL and additional fields that must be passed as part of the subsequent `HTTP POST` request. The following code demonstrates how to use the requests package with a presigned POST URL to perform a `POST` request for file upload.

#### Form Arguments
| Request Params | File Type | | Description |
| ------------- | ------------- | ------------- | ------------- |
| policy  | `String`  | **Required** |eyJleHBpcmF0aW9uIjogIjIwMjUtMDItMjFUMDc6MTc6MzRa.... |
| x-amz-algorithm  | `string`  | **Required** |AWS4-HMAC-SHA256.|
| x-amz-credential  | `string`  | **Required**,default: 16000 |ASIA2ADMPV7EBIIIA3UR/20250221/eu-west-1/s3/aws4_request.|
| x-amz-date | `string`  |**Required**,default: False | 20250221T061734Z.|
| x-amz-security-token | `String`  |**Required** | IQoJb3JpZ2luX2VjEKf//////////wEaCWV1LXdlc3QtMSJHMEUC...|
| x-amz-signature | `String`  |**Required** |e3cca032a465e57b837b5d2...|
| file | `file`  |**Required** |A URL to notify once the ASR processing is complete.|

#### Response Body
```
json
1
```
<Tabs>
<TabItem value="py" label="Python" default>

```py
import requests

url = "{{uploadUrl}}"

payload = {'AWSAccessKeyId': '{{fields-AWSAccessKeyId}}',
'key': '{{fields-key}}',
'policy': '{{fields-policy}}',
'signature': '{{fields-signature}}',
'x-amz-security-token': '{{fields-x-amz-security-token}}'}
files=[
  ('file',('tts_aw215n3s4ni4_IsiZulu_H127Bqf8aN08.wav',open('KpALthHva/tts_aw215n3s4ni4_IsiZulu_H127Bqf8aN08.wav','rb'),'audio/wav'))
]
headers = {}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)

```

</TabItem>
<TabItem value="nodejs" label="NodeJs - Request" >

```js 
var request = require('request');
var fs = require('fs');
var options = {
  'method': 'POST',
  'url': '{{uploadUrl}}',
  'headers': {
  },
  formData: {
    'AWSAccessKeyId': '{{fields-AWSAccessKeyId}}',
    'key': '{{fields-key}}',
    'policy': '{{fields-policy}}',
    'signature': '{{fields-signature}}',
    'x-amz-security-token': '{{fields-x-amz-security-token}}',
    'file': [
      fs.createReadStream('KpALthHva/tts_aw215n3s4ni4_IsiZulu_H127Bqf8aN08.wav')
    ]
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


```

</TabItem>
</Tabs>

## Endpoint: `/asr/async/status`

```bash
https://api.botlhale.xyz/asr/async/status
```
 
:::tip
> You need to include an `Authentication Token` in request headers. See the [Authentication](API.md#authentication) page of this documentation for information on how to generate authentication token codes.
:::

This endpoint returns the status of the asynchronous request process.

Request Params | Data Type | |Description
| ------------- | ------------- | ------------- | ------------- |
| OrgID  | `String`  | **Required** |Organisation ID |
| FileName  | `Text` | **Required** |The filename generated from the async upload process. |


**Request Example**

<Tabs>
<TabItem value="py" label="Python" default>

```py
import requests

url = "https://api.botlhale.xyz/asr/async/status?OrgID=<OrgID>&FileName=<filename>"

payload={

  }

files=[

]

headers = {
  'Authorization': 'Bearer <IdToken>'
}

response = requests.request("GET", url, headers=headers, data=payload, files=files)

print(response.json())
```

</TabItem>
<TabItem value="bash" label="Bash" >

```js 
curl --location --request GET 'https://api.botlhale.xyz/asr/async/status?OrgID=<OrgID>&FileName=<filename>' \
--header 'Authorization: Bearer <IdToken>' 
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <IdToken>");

var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.botlhale.xyz/asr/async/status?OrgID=<OrgID>&FileName=<filename>", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

</TabItem>
<TabItem value="nodejs" label="Node JS - Request">

```js
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.botlhale.xyz/asr/async/status?OrgID=<OrgID>&FileName=<filename>',
  'headers': {
    'Authorization': 'Bearer <IdToken>'
  },
  formData: {

  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

</TabItem>
</Tabs>


**Response body**

```json
{
    "data": [
        {
            "OrgID": "<OrgID>",
            "id": 207891841473145364,
            "process": "<filename>.wav",
            "processTime": "processTime",
            "status": "running"
        }
    ]
}
```
<br />



#### ASR Async get data GET
```bash
https://api.botlhale.xyz/asr/async/data
```

:::tip
> You need to include an `Authentication Token` in request headers. See the [Authentication](API.md#authentication) page of this documentation for information on how to generate authentication token codes.
:::

This endpoint returns the status of the async process.

| Request Params | Data Type | | Description |
| ------------- | ------------- | ------------- | ------------- |
| OrgID  | `String`  |**Required** |Organisation ID |
| FileName  | `Text` |**Required** |The filename generated from the async upload process |


**Request Example**

<Tabs>
<TabItem value="py" label="Python" default>

```py
import requests

url = "https://api.botlhale.xyz/asr/async/getdata?OrgID=<OrgID>&FileName=<filename>"

payload={

  }

files=[

]

headers = {
  'Authorization': 'Bearer <IdToken>'
}

response = requests.request("GET", url, headers=headers, data=payload, files=files)

print(response.json())
```

</TabItem>
<TabItem value="bash" label="Bash" >

```js 
curl --location --request GET 'https://api.botlhale.xyz/asr/async/getdata?OrgID=<OrgID>&FileName=<filename>' \
--header 'Authorization: Bearer <IdToken>' 
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <IdToken>");

var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.botlhale.xyz/asr/async/getdata?OrgID=<OrgID>&FileName=<filename>", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

</TabItem>
<TabItem value="nodejs" label="Node JS - Request">

```js
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.botlhale.xyz/asr/async/getdata?OrgID=<OrgID>&FileName=<filename>',
  'headers': {
    'Authorization': 'Bearer <IdToken>'
  },
  formData: {

  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

</TabItem>
</Tabs>


**Response body**
 
```json
{
    "audio_length": "30.0",
    "filename": "/<filename>.wav",
    "status": "complete",
    "time": {
        "diarization": 6.815945625305176,
        "recognition": 4.098539113998413
    },
    "timestamps": [
        {
            "end": 1260.0000000000005,
            "filename": "1_speaker_0_660.0000000000003_1260.0000000000005_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_0",
            "start": 660.0000000000003,
            "transcription": "<transcription>"
        },
        {
            "end": 2310.0000000000014,
            "filename": "2_speaker_1_1260.000000000001_2310.0000000000014_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_1",
            "start": 1260.000000000001,
            "transcription": "<transcription>"
        },
        {
            "end": 2699.9999999999995,
            "filename": "3_speaker_0_2309.9999999999995_2699.9999999999995_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_0",
            "start": 2309.9999999999995,
            "transcription": "<transcription>"
        },
        {
            "end": 6359.999999999998,
            "filename": "4_speaker_1_2699.9999999999973_6359.999999999998_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_1",
            "start": 2699.9999999999973,
            "transcription": "<transcription>"
        },
        {
            "end": 6780.000000000008,
            "filename": "5_speaker_0_6360.000000000008_6780.000000000008_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_0",
            "start": 6360.000000000008,
            "transcription": "<transcription>"
        },
        {
            "end": 7860.000000000012,
            "filename": "6_speaker_1_6780.000000000012_7860.000000000012_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_1",
            "start": 6780.000000000012,
            "transcription": "<transcription>"
        },
        {
            "end": 8580.000000000022,
            "filename": "7_speaker_0_7860.000000000021_8580.000000000022_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_0",
            "start": 7860.000000000021,
            "transcription": "<transcription>"
        },
        {
            "end": 13950.000000000011,
            "filename": "8_speaker_1_8580.00000000001_13950.000000000011_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_1",
            "start": 8580.00000000001,
            "transcription": "<transcription>"
        },
        {
            "end": 15239.999999999889,
            "filename": "9_speaker_1_14249.999999999887_15239.999999999889_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_1",
            "start": 14249.999999999887,
            "transcription": "<transcription>"
        },
        {
            "end": 15929.999999999867,
            "filename": "10_speaker_0_15239.999999999867_15929.999999999867_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_0",
            "start": 15239.999999999867,
            "transcription": "<transcription>"
        },
        {
            "end": 18629.999999999854,
            "filename": "11_speaker_1_15929.999999999853_18629.999999999854_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_1",
            "start": 15929.999999999853,
            "transcription": "<transcription>"
        },
        {
            "end": 19739.99999999995,
            "filename": "12_speaker_0_18629.99999999995_19739.99999999995_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_0",
            "start": 18629.99999999995,
            "transcription": "<transcription>"
        },
        {
            "end": 21839.999999999993,
            "filename": "13_speaker_1_19739.999999999993_21839.999999999993_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_1",
            "start": 19739.999999999993,
            "transcription": "<transcription>"
        },
        {
            "end": 22410.000000000073,
            "filename": "14_speaker_0_21840.00000000007_22410.000000000073_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_0",
            "start": 21840.00000000007,
            "transcription": "<transcription>"
        },
        {
            "end": 24360.00000000009,
            "filename": "15_speaker_1_22410.00000000009_24360.00000000009_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_1",
            "start": 22410.00000000009,
            "transcription": "<transcription>"
        },
        {
            "end": 25590.000000000167,
            "filename": "16_speaker_0_24360.000000000167_25590.000000000167_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_0",
            "start": 24360.000000000167,
            "transcription": "<transcription>"
        },
        {
            "end": 26430.000000000215,
            "filename": "17_speaker_1_25590.000000000215_26430.000000000215_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_1",
            "start": 25590.000000000215,
            "transcription": "<transcription>"
        },
        {
            "end": 28380.000000000244,
            "filename": "18_speaker_0_26430.000000000244_28380.000000000244_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_0",
            "start": 26430.000000000244,
            "transcription": "<transcription>"
        },
        {
            "end": 29220.00000000032,
            "filename": "19_speaker_1_28380.00000000032_29220.00000000032_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_1",
            "start": 28380.00000000032,
            "transcription": "transcription"
        },
        {
            "end": 30000.000000000353,
            "filename": "20_speaker_0_29220.00000000035_30000.000000000353_nso-ZA.wav",
            "language": "nso-ZA",
            "speaker": "speaker_0",
            "start": 29220.00000000035,
            "transcription": "<transcription>"
        }
    ]
}
```
<br />

# Speech to Text endpoints (async)

## Endpoint: `/asr/async/upload`
**Method: POST**

This endpoint generates a **presigned URL** that allows users to upload a speech file for asynchronous **Automatic Speech Recognition (ASR)** processing. Once the file is uploaded, it will be processed asynchronously, and a notification can be sent to a specified URL when the transcription is complete.

#### Authentication

A valid **Bearer token** must be included in the request headers.

**Headers:**
- Authorization: Bearer `<your_token>`

**Form Arguments**
| Request Params  | Data Type | Required | Description |
|-----------------|-----------|----------|-------------|
|  org_id            | string  | **Optional**|   The unique identifier for the organization making the request. |
|  language_code   | string  | **Optional**|  The language spoken in the supplied audio clip. If not provided, the language will be auto-detected. |
|   sample_rate  | integer  | **Optional**, default: 16000 |  The sample rate of the supplied audio clip in hertz.|
|   diarization    |  bool | **Optional**,default: False |  Whether to use speaker diarization to differentiate between multiple speakers.|
|  voice_id        | string  |   **Optional** |  A unique identifier for the speaker, if applicable. |
|  notify_url        | string  |   **Optional**| A URL to notify once the ASR processing is complete.|

#### Response

The API returns a JSON object containing a presigned URL and the required fields for uploading the audio file.

**Example Response:**
```
Unset
{
    "upload_url": "https://s3-bucket-url.com/presigned-upload-link",
    "fields": {
        "key": "asr_uploads/audio_123456.wav",
        "AWSAccessKeyId": "AKIA...",
        "policy": "base64-encoded-policy",
        "signature": "signature-string"
    },
    "expires_in": 3600
}


```

**Response Fields:**

| Request Params | Data Type | Description |
| ------------- | ------------- | ------------- |
| upload_url  | `string` | The presigned S3 URL where the speech file should be uploaded | 
| fields  | `dictionary` | Contains additional parameters required for the file upload, including authentication credentials.| 
| expires_in | `integer`, default: 3600 | The number of seconds before the presigned URL expires (1 hour).|

## Endpoint: `/asr/async/status`

**Method: GET**

This endpoint retrieves the status of an asynchronous **ASR (Automatic Speech Recognition) process** and returns the results if the process is completed.

#### Authentication

A valid **Bearer token** must be included in the request headers.

**Headers:**

- **Authorization:** Bearer `<your_token>`

**Form Arguments**

| Request Params  | Data Type | Required | Description |
|-----------------|-----------|----------|-------------|
| org_id           | string  | **Required** |   The **organization ID** associated with the request. |
| filename  | string  | **Required** |   The **filename** generated during the async ASR upload process. |

#### Response

The API returns a JSON object containing the status of the process and the results if available.

**Example Response (Running ):**
```
Unset
{
    "status": "running",
    "location": "location",
    "inference_id": "org_98765"
}
```

**Example Response (Completed):**
```
Unset
{
    "status": "completed",
    "location": "location",
    "inference_id": "org_98765"
}
```

## Endpoint: /asr/async/data

**Method: GET**

This endpoint retrieves the **status** and **detailed results** of an **asynchronous ASR (Automatic Speech Recognition) process**, including **transcription, speaker diarization, timestamps, and redacted versions of speech segments**.

#### Authentication

A valid **Bearer token** must be included in the request headers.

**Headers:**
- **Authorization: Bearer** `<your_token>`

#### Form Arguments

| Request Params  | Data Type | Required | Description |
|-----------------|-----------|----------|-------------|
| org_id          | string  | **Required** |  The organization ID associated with the request. |
|filename  | string  | **Required** |  The filename generated during the async ASR upload process. The format should be `OrgID/filename.wav` |

#### Response

The API returns a **JSON object** containing metadata about the processed audio and **detailed transcription data.**

**Example Response (Completed)**
```
Unset
{
    "audio_length": 293.52,
    "date_received": "29/01/2025 23:04:28",
    "filename": "asr_618Ilr3ux6b7__16000_BotlhaleAI999__True_https:******botlhaleai**free**beeceptor**com_3M50XY73w6LS29012025_230351",
    "time": {
        "diarization": 11.390989780426025,
        "recognition": 84.02089238166809
    },
    "timestamps": [
        {
            "emotion": "neu",
            "end": 4083.191850594227,
            "filename": "0_SPEAKER_00_1112.0543293718165_4083.191850594227.wav",
            "language": "English",
            "redaction": "Hello, good day. You're speaking to <PERSON> from <LOCATION>. How are you doing today?",
            "speaker": "SPEAKER_00",
            "start": 1112.0543293718165,
            "times": {
                "asr": 1.1830341815948486,
                "emotion": 4.76837158203125e-07,
                "red": 0.024340391159057617,
                "sli": 0.01774907112121582
            },
            "transcription": "Hello, good day. You're speaking to Nick from Kuru. How are you doing today?",
            "transcription_no_LM": "",
            "translation": "-"
        },
        {
            "emotion": "neu",
            "end": 292979.6264855688,
            "filename": "80_SPEAKER_01_291281.83361629886_292979.6264855688.wav",
            "language": "English",
            "redaction": "Thank you.",
            "speaker": "SPEAKER_01",
            "start": 291281.83361629886,
            "times": {
                "asr": 0.9126956462860107,
                "emotion": 4.76837158203125e-07,
                "red": 0.020905494689941406,
                "sli": 0.01774907112121582
            },
            "transcription": "Thank you.",
            "transcription_no_LM": "",
            "translation": "-"
        }
    ]
}
```
#### Response Fields

**General Metadata**
| Request Params  | Data Type   | Description                                                                                           |
|-----------------|-------------|-------------------------------------------------------------------------------------------------------|
| audio_length    | float       | The total duration of the audio file in seconds.                                                    |
| date_received   | string      | The date and time when the request was received.                                                     |
| filename        | string      | The filename associated with the ASR request.                                                        |
| time            | dictionary  | Processing time details: diarization (float) – Time spent on speaker diarization, and recognition (float) – Time spent on speech recognition. |

#### Timestamps (List of Speech Segments)

Each object in the **timestamps** list represents a spoken segment with the following details:

| Request Params  | Data Type   | Description                                                                                           |
|-----------------|-------------|-------------------------------------------------------------------------------------------------------|
| start    | float       | Start time (milliseconds).                                                 |
|end       | float       |  End time (milliseconds).                                                  |
| speaker        | string      | Identified speaker ID (SPEAKER_00, SPEAKER_01, etc.).                |
| filename        | string      |The audio snippet filename corresponding to this segment.                       |
| language        | string      | The detected language of the speech.                       |
| emotion       | string      |  The predicted emotion (e.g., "neu" for neutral).                       |
| redaction        | string      | The redacted version of the speech, replacing sensitive data `(<PERSON>, <LOCATION>).`|
| transcription       | string      | The full transcript of the spoken segment.                     |
|transcription_no_LM        | string      |  A version of the transcript without language model post-processing.                       |
| translation       | string      | Translation of the speech (if applicable).                       |


#### Processing Time per Segment
| Request Params  | Data Type   | Description                                                                                           |
|-----------------|-------------|-------------------------------------------------------------------------------------------------------|
| asr    | float       | Time taken for automatic speech recognition.                                             |
|emotion       | float       |  Time taken for emotion detection.                                                 |
| red        | float      | Time taken for redaction processing.            |
| speaker       | float      | Speaker label identification time.                    |

## Contact us

:::info
We are here to help! Please [contact us](mailto:support@botlhale.ai) with any questions.
:::