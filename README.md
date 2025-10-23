# ⚙ Node-Mongoose-JWT-APIs

A secure REST APIs built using Node.js, Express, and MongoDB with JWT authentication, role-based access, and CRUD operations for Users, Products, and Students.

<div>
  <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB + Mongoose" />
  <img src="https://img.shields.io/badge/-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT (Authentication)" />
  <img src="https://img.shields.io/badge/-bcryptjs-003366?style=for-the-badge&logo=security&logoColor=white" alt="bcryptjs" />
  <img src="https://img.shields.io/badge/-dotenv-009639?style=for-the-badge&logo=dotenv&logoColor=white" alt="dotenv" />
  <img src="https://img.shields.io/badge/-Joi-FFB703?style=for-the-badge&logo=javascript&logoColor=black" alt="Joi Validation" />
  <a href="https://node-mongoose-jwt-apis.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/-Render-FF6C37?style=for-the-badge&logo=render&logoColor=white" alt="Render Deployment" />
  </a>
</div>



---

## 🧭 Table of Contents

- [📖 Introduction](#-introduction)
- [⚙ Tech Stack](#-tech-stack)
- [🔋 Features](#-features)
- [📦 Quick Start](#-quick-start)
- [🚀 Deployment on Render](#-deployment-on-render)
- [📬 Postman Collection](#-postman-collection)
- [📡 Swagger API documentation]( #swagger-api-documentation)

## 📖 Introduction

This project demonstrates how to build a **secure REST API** using:
- **Express.js** for routing  
- **Mongoose** for MongoDB object modeling  
- **JWT** for authentication  
- **Middleware** for access control and validation  

It provides a ready-to-use backend for projects that need **user management**, **authentication**, **student and product CRUD**, and **role-based authorization**.

---

## ⚙ Tech Stack

| Technology | Description |
|-------------|-------------|
| **Node.js** | JavaScript runtime for building the server |
| **Express.js** | Web framework for building APIs |
| **MongoDB + Mongoose** | NoSQL database and ODM |
| **JWT (JSON Web Token)** | Authentication and authorization |
| **bcryptjs** | Password hashing |
| **dotenv** | Environment variable management |
| **Joi** | Schema validation |

---

## 🔋 Features

✅ **User Authentication & Authorization** (JWT)  
✅ **Role-based Access Control** (Admin/User)  
✅ **CRUD Operations** for Users, Students, and Products  
✅ **Validation** using Joi  
✅ **Secure Password Hashing** with bcrypt  
✅ **Error Handling Middleware**  
✅ **Query Filters** (e.g., `/api/users?role=admin&age=25`)  
✅ **Environment Config Support (.env)**  

---
## 📦 Quick Start (Setup Guide)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/shasbinas/Node-Mongoose-JWT-APIs.git
cd Node-Mongoose-JWT-APIs
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create `.env` file in the root directory
```env
# Server Port
PORT=5000

# MongoDB Connection URI
MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.mongodb.net/<DATABASE_NAME>

# JWT Secret Key for Authentication
JWT_SECRET=your_jwt_secret_key_here

# Node Environment: development or production
NODE_ENV=development

```

### 4️⃣ Start the server
```bash
npm run dev   # Development mode
npm start     # Production mode
```

Server will run on:  
👉 **http://localhost:5000**

---


## 🌍 Live Demo

🚀 **Deployed on Render:**  
🔗 [https://node-mongoose-jwt-apis.onrender.com](https://node-mongoose-jwt-apis.onrender.com)

You can test all available endpoints directly via the Postman collection below.

---

## 📬 Postman Collection

The Postman collection JSON file is available in the repo under the `postman` folder

---

## Swagger API documentation
```
{
  "swagger": "2.0",
  "info": {
    "title": "REST API",
    "description": "Auto-generated Swagger doc",
    "version": "1.0.0"
  },
  "host": "localhost:5000",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "paths": {
    "/api/register": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "username": {
                  "example": "any"
                },
                "email": {
                  "example": "any"
                },
                "password": {
                  "example": "any"
                },
                "role": {
                  "example": "any"
                },
                "age": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      }
    },
    "/api/login": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "email": {
                  "example": "any"
                },
                "password": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/api/users/{id}": {
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "token",
            "in": "query",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/api/users": {
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "token",
            "in": "query",
            "type": "string"
          },
          {
            "name": "age",
            "in": "query",
            "type": "string"
          },
          {
            "name": "role",
            "in": "query",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/api/products/": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "token",
            "in": "query",
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "title": {
                  "example": "any"
                },
                "author": {
                  "example": "any"
                },
                "price": {
                  "example": "any"
                },
                "category": {
                  "example": "any"
                },
                "publisher": {
                  "example": "any"
                },
                "isbn": {
                  "example": "any"
                },
                "stock": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      },
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "token",
            "in": "query",
            "type": "string"
          },
          {
            "name": "category",
            "in": "query",
            "type": "string"
          },
          {
            "name": "minPrice",
            "in": "query",
            "type": "string"
          },
          {
            "name": "maxPrice",
            "in": "query",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/api/products/{id}": {
      "put": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "token",
            "in": "query",
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "title": {
                  "example": "any"
                },
                "author": {
                  "example": "any"
                },
                "price": {
                  "example": "any"
                },
                "category": {
                  "example": "any"
                },
                "publisher": {
                  "example": "any"
                },
                "isbn": {
                  "example": "any"
                },
                "stock": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not Found"
          }
        }
      },
      "delete": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "token",
            "in": "query",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Forbidden"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/api/students/": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "token",
            "in": "query",
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "name": {
                  "example": "any"
                },
                "marks": {
                  "example": "any"
                },
                "class": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      },
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "token",
            "in": "query",
            "type": "string"
          },
          {
            "name": "class",
            "in": "query",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/api/students/{id}/marks": {
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "token",
            "in": "query",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/api/students/{id}": {
      "put": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "token",
            "in": "query",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not Found"
          }
        }
      },
      "delete": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "token",
            "in": "query",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Forbidden"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    }
  }
}
```
If you like this project, **please ⭐ star the repo!**