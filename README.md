# Screen Recording Chrome Extension API

This Node.js API allows you to perform video processing tasks, including uploading video chunks, concatenating videos, and transcribing the concatenated.

## Features
- Upload video chunks.
- Concatenate uploaded video chunks.
- Transcribe the concatenated video.
- Retrieve video and transcription information.

## Getting Started

Follow the steps below to set up and run the API.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Project Dependencies

- Express
- Body-parser
- Path
- Multer
- Fluent-ffmpeg
- Deepgram SDK
- Fs
- UUID
- Dotenv

### Installation

1. Clone This Repository:

    ``` 
    git clone https://github.com/DimTony/HNGtask5-Extension.git
    cd HNGtask5-Extension 
    ```

2. Install Dependencies

    ``` npm install ```

3. Create Your Environment Variables

    Create a `.env` file in the root directory and specify your environment variables, including your Deepgram API Key and preferred port

    ```
    PORT=3000
    DEEPGRAM_API_KEY=YOUR_DEEPGRAM_API_KEY_HERE
    
    ```
## Usage

Start the server:

    ```
    npm start
    ```

Use an API client (e.g., Postman) to interact with the following endpoints

- Start Video: `POST /api/start`
- Upload, Concatenate & Transcribe Video: `POST /api/uploadFile`
- Stop Video: `POST /api/stop`
- Retrieve Video Information: `GET /api/getVideo/:id`


## Contributing

Contributions are welcomed! Feel free to open issues or submit pull requests.