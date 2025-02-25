---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Text-to-Speech API

## Endpoint `/tts`
```bash
https://api.botlhale.xyz/tts
```
:::tip
> You need to include an `Authentication Token` in request headers. See the [Authentication](API.md#authentication) page of this documentation for information on how to generate authentication token codes.
:::
**Method: POST**

This endpoint handles **Text-to-Speech (TTS)** requests by converting input text into **synthesized speech**. The request is processed by an external **TTS** service, and the response includes a **URL to the generated audio file** along with the **sampling rate.**

#### Authentication

A valid **Bearer token** must be included in the request headers.

**Headers:**
- **Authorization:** Bearer `<your_token>`

#### Form Arguments

Request Params |Data Type | |Description |
| ------------- | ------------- | ------------- | ------------- |
| text  | `string` |**Required** |The text to be converted into speech.| 
|language_code  | `string` | **Required** | The language code specifying the language for speech synthesis |

#### Response body
The API returns a JSON object containing the **audio URL** and additional details about the request.#

**Example Response:**
```
Unset
{
    "date_received": "20022025_083419",
    "language_code": "en-ZA",
    "speech_url": "https://botlhale-api-tts-west.s3.amazonaws.com/tts_tO9Tr6B1yD1VT950ven.wav?AWSAccessKeyId=AKIA2ADMPV7EP36BOBPX&Signature=GOLUnQhTiKdQvUSU2iEbbh8KkEI%3D&Expires=1740036859",
    "text": "BotlhaleAI"
}

```
**Response Fields:**

| Request Params | Data Type | Description |
| ------------- | ------------- | ------------- |
| audio_ur  | `string` | The URL where the synthesized speech file can be accessed.| 
| language_code  | `string` | The language code used for synthesis.| 
| text  | `string` | The original input text. |
| sampling_rate  | `string` | The sample rate of the generated audio in hertz. |
| date_received  | `string` | The date and time when the request was processed, in ISO 8601 format. |



 ## Supported Languages

The following table shows the languages Botlhale AI currently supports. The table also indicates the 
speech tasks supported for each language. Our team is always working to add new languages to the list.

| Language    | Region       | Code   | Translation | ASR | TTS | Diarization | Language ID |
| ----------- | ------------ | ------ | ----------- | --- | --- | ----------- | ----------- |
| English     | South Africa | en-ZA  | √           | √   | √   | √           | √           |
| isiZulu     | South Africa | zu-ZA  | √           | √   | √   | √           | √           |
| isiXhosa    | South Africa | xh-ZA  | √           | √   | √   | √           | √           |
| Sesotho     | South Africa | st-ZA  | √           | √   | -   | √           | √           |
| Setswana    | South Africa | tn-ZA  | √           | √   | √   | √           | √           |
| Sepedi      | South Africa | nso-ZA | √           | √   | √   | √           | √           |
| Tshivenda   | South Africa | vr-ZA  | -           | √   | √   | √           | √           |
| Xitsonga    | South Africa | ts-ZA  | √           | √   | -   | √           | √           |
| Afrikaans   | South Africa | af-ZA  | √           | √   | √   | √           | √           |
| Kiswahili   | Kenya        | sw-KE  | √           | √   | √   | √           | -           |
| Kinyarwanda | Rwanda       | rw-RW  | √           | √   | -   | -           | -           |

<br />

**Request Example**

<Tabs>
<TabItem value="py" label="Python" default>

```python 
import requests

url = "https://api-dev.botlhale.xyz/tts"

payload = {'LanguageCode': 'xh-ZA',
'text_msg': 'Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.'}
files=[

]
headers = {}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)

```

</TabItem>
<TabItem value="bash" label="Bash">


```bash 
curl --location 'https://api-dev.botlhale.xyz/tts' \
--form 'language_code="xh-ZA"' \
--form 'text_msg="Xa ufuna ukuthenga imoto cofa iqhosha lokuqala."'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript 
const formdata = new FormData();
formdata.append("language_code", "xh-ZA");
formdata.append("text_msg", "Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.");

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("https://api-dev.botlhale.xyz/tts", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

</TabItem>
<TabItem value="nodejs" label="NodeJs - Request">

```js
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api-dev.botlhale.xyz/tts',
  'headers': {
  },
  formData: {
    'language_code': 'xh-ZA',
    'text_msg': 'Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.'
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
    "date_received": "09/03/2023 11:18:09",
    "language_code": "IsiXhosa",
    "speech_responseURL": "<SpeechResponseURL>",
    "text_msg": "Xa ufuna ukuthenga imoto cofa iqhosha lokuqala."
}
```

## Contact us

:::info
We are here to help! Please [contact us](mailto:support@botlhale.ai) with any questions.
:::



<!-- 
## Speech-to-Text API

This page outlines the fundamentals of using the Speech-to-Text API. Covered in this page is information on the 
types of requests you can make using Speech-to-Text, how to construct those requests, and how to handle their 
responses. It's recommended that you read this page in its entirety before diving into the Speech API.

**Speech Requests**

Speech-to-Text has two main methods of performing speech recognition. These are listed and described as follows:

#### Synchronous Requests

With synchronous requests (REST), audio data is sent to the Speech-to-Text API, recognition is performed on that
 data, and results are returned once all audio has been processed. Synchronous recognition requests are limited 
to audio data of 1 minute or less in duration.

#### Asynchronous Requests

With asynchronous requests (REST), audio data is sent to the Speech-to-Text API and a Long Running Operation is 
initiated. Using this operation, you can periodically poll for recognition results. Asynchronous requests can be used 
for audio data with a duration up to 400 minutes.


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


**ASR POST**

```bash
https://api.botlhale.xyz/asr
```
:::tip
> You need to include an `Authentication Token` in request headers. See the [Authentication](API.md#authentication) page of this documentation for information on how to generate authentication token codes.
:::

This endpoint handles single speech-to-text conversion. This API endpoint returns a text transcript of the audio file provided and supports audio clips of up to 1 minutes.


Request Params |File Type | | Description |
| ------------- | ------------- | ------------- | ------------- |
| SpeechFile  | `File`  | **Required** | This is the binary audio file of the user's message.| 
| SampleRate  | `Number`  | **Required** | The sample rate of the supplied audio clip in hertz, for example, 8kHz rendered as 8 000.|
| LanguageCode  | `String`  | **Optional** | This is the language spoken in the supplied audio clip. We use BCP-47 language tags. <br/>See the Supported Languages page for a list of supported languages and codes. |



**Request Example**

<Tabs>
<TabItem value="py" label="Python" default>

```py
import requests

url = "https://api-dev.botlhale.xyz/asr"

payload = {'LanguageCode': 'zu-ZA',
'SampleRate': '16000'}
files=[
  ('SpeechFile',('tts_aw215n3s4ni4_IsiZulu_H127Bqf8aN08.wav',open('0zanOkguS/tts_aw215n3s4ni4_IsiZulu_H127Bqf8aN08.wav','rb'),'audio/wav'))
]
headers = {}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)

```

</TabItem>
<TabItem value="bash" label="Bash">

```js 
curl --location 'https://api-dev.botlhale.xyz/asr' \
--form 'LanguageCode="zu-ZA"' \
--form 'SampleRate="16000"' \
--form 'SpeechFile=@"0zanOkguS/tts_aw215n3s4ni4_IsiZulu_H127Bqf8aN08.wav"'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
const formdata = new FormData();
formdata.append("LanguageCode", "zu-ZA");
formdata.append("SampleRate", "16000");
formdata.append("SpeechFile", fileInput.files[0], "[PROXY]");

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
    'LanguageCode': 'zu-ZA',
    'SampleRate': '16000',
    'SpeechFile': [
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
</Tabs>


**Response body**

```json
{
    "date_received": "09/03/2023 11:21:07",
    "language_code": "zu-ZA",
    "NewSampleRate": "16000",
    "speech_file": "asr_6fFd2s7974WO_zu-ZA__w7P2MS4FH454.wav",
    "transcription": "izithombe zakhe umzimba zokuxhumana"
}
```

## Contact us

:::info
We are here to help! Please [contact us](mailto:support@botlhale.ai) with any questions.
::: --> 