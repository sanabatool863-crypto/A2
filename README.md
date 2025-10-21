# A2 E-Commerce App

A **full-stack E-Commerce application** built using **React Native (Expo)** for the frontend, **Express.js + MySQL** for the backend, and **XAMPP** for database management.

The app enables users to **browse products, view details, add items to the cart, manage profiles, and place orders** seamlessly.

## Features

* **Home Screen** – Browse products, search, and explore categories.
* **Product Details Screen** – View detailed product info, images, and add-to-cart option.
* **Cart Screen** – View selected items with pricing details.
* **Checkout Screen** – Confirm shipping and payment information.
* **Order Confirmation Screen** – See order summary and estimated delivery.
* **Profile Screen** – Manage user info and order history.

---

## Tech Stack

| Layer             | Technology                    |
| ----------------- | ----------------------------- |
| Frontend          | React Native (Expo)           |
| Backend           | Node.js + Express.js          |
| Database          | MySQL (via XAMPP)             |
| Styling           | React Native Components + CSS |
| Authentication    | JSON Web Tokens (JWT)         |
| Password Security | bcrypt.js                     |

## Setup Instructions

### 1. Clone the Project

```bash
git clone https://github.com/sanabatool863-crypto/A2-ecommerce-app.git
cd A2-ecommerce-app
```

### 2. Backend Setup (Express.js)

#### Step 1: Install Dependencies

```bash
cd backend
npm install
```

#### Step 2: Configure Database Connection

Edit the `db.js` file to set your **MySQL username, password, and database name**.

#### Step 3: Start the Server

```bash
node server.js
```

The server will run at:
[http://localhost:5000](http://localhost:5000)

### 3. Database Setup (MySQL + XAMPP)

#### Step 1: Open XAMPP

* Start **Apache** and **MySQL** from the XAMPP Control Panel.
* Click **Admin** next to MySQL to open **phpMyAdmin**.

#### Step 2: Create Database

* Create a new database, e.g., `a2_ecommerce_db`.

#### Step 3: Create Tables

* Import the SQL schema provided in the `database` folder (if available).
* Or manually create tables: `users`, `products`, `orders`, `cart_items`, etc.

#### Step 4: Connect Backend

* Ensure `db.js` has correct credentials and database name.

### 4. Frontend Setup (React Native + Expo)

#### Step 1: Install Expo CLI (if not installed)

```bash
npm install -g expo-cli
```

#### Step 2: Install Dependencies

```bash
cd frontend
npm install
```

#### Step 3: Configure Backend URL

* Update API base URL in your frontend `.env` or `config.js` file:

```javascript
const BASE_URL = "http://localhost:5000";
```

#### Step 4: Run the App

```bash
expo start
```

* Use **Expo Go** on your phone or an emulator to view the app.

## How Frontend Communicates with Backend

* The React Native app uses **Axios** to send HTTP requests to the Express.js API.
* The Express.js server handles these routes and performs **CRUD operations** on MySQL.
* **User authentication** is managed using **JWT tokens**, stored on the client.
* Data like **cart items, orders, and user info** are dynamically fetched from the database.
>>>>>>> 4a6fb78acd1555ef0de2eab8db1b203085eb980a
