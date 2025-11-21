# 🚗 carLelo – Car Rental Web Application

carLelo is a full-stack car rental platform built using the MERN stack.
It allows users to browse, book, manage rentals, and view car details, while admins can manage cars and bookings through backend APIs.

# 📌 Features
### 🧑‍💻 User Features

Browse available cars

View car details

Book a vehicle

User authentication (Login/Register)

Manage profile and bookings

## 🛠️ Admin Features

Add / Edit / Delete cars

Manage bookings

Secure admin routes

Dashboard (if included)

# 🏗️ Tech Stack
## Frontend (client/)

React.js

Vite

Axios

Context API / Redux (depending on your project)

Tailwind / CSS (depending on your project)

## Backend (server/)

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Bcrypt Password Hashing

# 📁 Project Structure
```
carLelo/
│── client/ 
    │── src/
    ├── assets/
    │
    ├── components/
    │   ├── Owner/
    │   │   ├── NavbarOwner.jsx
    │   │   ├── Sidebar.jsx
    │   │   └── Title.jsx
    │   │
    │   ├── Bottom.jsx
    │   ├── CarDekho.jsx
    │   ├── Dispatch.jsx
    │   ├── Features.jsx
    │   ├── Hero.jsx
    │   ├── Loading.jsx
    │   ├── Login.jsx
    │   ├── Navbar.jsx
    │   ├── Promo.jsx
    │   ├── Testimonial.jsx
    │   └── Theme.jsx
    │
    ├── Context/
    │   └── Appcon.jsx
    │
    ├── pages/
    │   ├── Admin/
    │   ├── Bookings.jsx
    │   ├── Car.jsx
    │   ├── CarDetails.jsx
    │   └── Home.jsx
    │
    ├── App.jsx
    ├── index.css
    └── main.jsx 
│── server/
    │
    ├── auth/
    │   ├── auth.js
    │   └── Multer.js
    │
    ├── configs/
    │   ├── db.js
    │   └── Imagekit.js
    │
    ├── models/
    │   ├── Booking.js
    │   ├── Car.js
    │   └── User.js
    │
    ├── rasta/
    │   ├── bookingRasta.js
    │   ├── Ownerrasta.js
    │   └── userRasta.js
    │
    ├── Vash/
    │   ├── bookingvash.js
    │   ├── Ownervash.js
    │   └── UserVash.js
    │
    ├── node_modules/
    │
    └── server.js
```
## ⚙️ Installation & Setup
### 1️⃣ Clone the repository
```
git clone <your-repo-link>
cd carLelo
```
### 2️⃣ Setup Frontend
```
cd client
npm install
npm run dev
```
### 3️⃣ Setup Backend
```
cd server
npm install
npm run start
```

# 🌐 Live Demo
🔗 Render Deployment: https://carlelo-my.vercel.app/

🔗 GitHub Repository: https://github.com/Aayush98-dev/E-Commerce-CARLELE-

## 🧾 License

This project is licensed under the MIT License.