<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
