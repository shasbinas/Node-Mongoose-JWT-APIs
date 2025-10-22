# 🛠️ Node-Mongoose-JWT-APIs

A **RESTful API** built with **Node.js**, **Express**, and **MongoDB (Mongoose)** implementing **authentication** and **authorization** using **JWT (JSON Web Tokens)**.  
This backend serves as a complete system for managing **Users**, **Products**, and **Students**, featuring **role-based access control**, **secure endpoints**, and **data validation**.

---

## 🧭 Table of Contents

- [Introduction](#introduction)
- [⚙ Tech Stack](#-tech-stack)
- [🔋 Features](#-features)
- [🌐 Deployment](#-deployment)
- [📦 Quick Start](#-quick-start)
- [📡 API Documentation](#-api-documentation)


---

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

## 🌐 Deployment

You can deploy this API on:
- **Render**
- **Vercel (Serverless)**
- **Railway**
- **Heroku**

Make sure to set your `.env` variables in the deployment dashboard.

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
If you like this project, **please ⭐ star the repo!**