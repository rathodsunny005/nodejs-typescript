
# Nodejs + Typescript API Structure

## Overview

This project uses Docker for containerization. You can easily spin up the development or production environment using Docker Compose.

## 🚀 Getting Started

### Create .env file
create env file with below content
```
PORT=4000
NODE_ENV=production
DB_URL=your_db_url

```

### 🔧 For Development

To build and run the development environment:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

### 🚀 For Production

To build and run the production environment:

```bash
docker-compose -f docker-compose.prod.yml up --build
```


