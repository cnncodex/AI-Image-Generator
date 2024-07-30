# 🌄 AI Image Generator

This repository contains a simple Cloudflare Worker script that generates images based on a text prompt using the DreamShaper model from the Cloudflare AI service.

## ✨ Features

- 🎨 Generates images based on text prompts
- 🖼️ Returns the generated image in PNG format
- ⚠️ Handles errors gracefully

## 🚀 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/cnncodex/ai-image-generator.git
    cd ai-image-generator
    ```

2. Install Cloudflare Workers CLI (Wrangler):
    ```bash
    npm install -g wrangler
    ```

## 🔧 Configuration

1. Create a Cloudflare account and set up a new Worker.
2. Set up your environment variables in the Cloudflare dashboard.

## 🛠️ Usage

### 🚀 Deploying the Worker

1. Authenticate Wrangler with your Cloudflare account:
    ```bash
    wrangler login
    ```

2. Publish your Worker:
    ```bash
    wrangler publish
    ```

### 🌐 Making a Request

To generate an image, send a GET request to your deployed Worker's URL with the `prompt` query parameter.

Example:
```bash
curl "https://your-worker-url.workers.dev/?prompt=A beautiful sunset over the mountains"
