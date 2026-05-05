# 🚆 IRCTC Login & Signup Authentication System

## 📌 Project Overview

This project is a full-stack web application that simulates an IRCTC login and signup system.
Users can register, log in securely, and their data is stored in a database.

---

## ⚙️ Tech Stack

* Frontend: HTML, CSS, JavaScript,React.js
* Backend: Node.js, Express.js
* Database: MongoDB
* Authentication: JWT (JSON Web Token), Bcrypt

---

## 🔄 Project Flow (Step-by-Step)

1. User opens the signup page
2. User enters username and password
3. Password is encrypted using bcrypt
4. Data is stored in MongoDB
5. User logs in with credentials
6. Backend verifies password using bcrypt.compare()
7. If valid, JWT token is generated
8. Token is sent to frontend for authentication
9. User gets access to protected routes

---

## 🔐 Features

* User Signup & Login
* Password Encryption
* JWT Authentication
* Secure API handling
* MongoDB data storage

---

## 📂 Project Structure

IRCTC_PROJECT/
frontend/
backend.

---

## 🚀 How to Run the Project

### Backend

cd backend
npm run dev

### Frontend

Open index.html (or run with Live Server)
npm run dev

---

## 📸 Screenshots

<img width="1600" height="807" alt="WhatsApp Image 2026-05-03 at 5 38 03 PM" src="https://github.com/user-attachments/assets/c1da982c-b759-4b01-b9fd-dad4134a7387" />
<img width="1600" height="812" alt="WhatsApp Image 2026-05-03 at 8 00 55 PM" src="https://github.com/user-attachments/assets/e62b8000-403a-4dc3-9ff5-468c3d6437fe" />
<img width="1600" height="815" alt="WhatsApp Image 2026-05-03 at 8 11 31 AM" src="https://github.com/user-attachments/assets/4667bea8-5d0b-4573-829d-fba50aa15123" />
<img width="1600" height="806" alt="WhatsApp Image 2026-05-02 at 8 06 12 PM" src="https://github.com/user-attachments/assets/e43b1327-7584-450b-9d64-630c698d07a1" />
<img width="1600" height="812" alt="WhatsApp Image 2026-05-03 at 8 12 10 AM" src="https://github.com/user-attachments/assets/e8df3e46-2fe2-459c-8708-7a844a82376a" />
<img width="1600" height="809" alt="WhatsApp Image 2026-05-03 at 8 12 45 AM" src="https://github.com/user-attachments/assets/a77561ea-2e42-4053-a133-e577ee553949" />
<img width="1600" height="813" alt="WhatsApp Image 2026-05-02 at 7 59 29 PM" src="https://github.com/user-attachments/assets/7f19ea0e-d454-47b0-9985-f6dbbde0a3fe" />
<img width="1600" height="822" alt="WhatsApp Image 2026-05-02 at 8 00 15 PM" src="https://github.com/user-attachments/assets/f6abf9a6-00de-403e-ae3d-cc3d92622778" />


---
## 🎯 Project Focus

The main focus of this project is to implement a secure and scalable authentication system.

Key backend concepts demonstrated:

* Password hashing using bcrypt
* Token-based authentication using JWT
* REST API development using Express.js
* Database integration with MongoDB

The frontend is intentionally kept minimal to emphasize backend functionality and security.

## 📝 Note

This project mainly focuses on backend development and authentication logic.
The frontend is kept simple and minimal, as the primary goal is to demonstrate secure user authentication using Node.js, Express, MongoDB, JWT, and bcrypt.

UI/UX design and advanced styling were not the main focus of this project.


---
