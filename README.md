# 🏫 School Management App

A full-stack mini project built with **Next.js (App Router)** and **MySQL** to manage school records.  
The app allows users to **add schools** with details and images, and then **view schools** in a responsive ecommerce-style grid.

---

## 🚀 Features

- ➕ **Add School**: Submit school details with validation using `react-hook-form`
- 🖼️ **Image Upload**: Stores images inside `/public/schoolImages/` and saves file path in DB
- 📋 **Show Schools**: Displays schools like products with **name, address, city, and image**
- 🔔 **Toast Notifications**: Instant success/error messages using `react-toastify`
- 🛡️ **Form Validation**: Ensures valid email, contact number, and required fields
- 🗄️ **MySQL Integration**: Stores data in a cloud-hosted MySQL database
- 🛠️ **Auto Table Creation**: Ensures the `schools` table exists when the server starts
- 📱 **Responsive UI**: Works seamlessly on mobile and desktop

---

## 📂 Project Structure

school-management/
├── app/
│ ├── addSchool/ # Page to add school
│ │ └── page.tsx
│ ├── showSchools/ # Page to show schools
│ │ └── page.tsx
│ ├── api/
│ │ ├── addSchool/ # API to insert school
│ │ │ └── route.ts
│ │ └── showSchools/ # API to fetch schools
│ │ └── route.ts
│ └── layout.tsx # Global layout with ToastContainer
├── lib/
│ └── db.ts # MySQL connection + auto table creation
├── public/
│ └── schoolImages/ # Uploaded school images
├── .env.local # Environment variables (ignored in git)
├── package.json
└── README.md

---

## ⚙️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS
- **Forms**: react-hook-form
- **Notifications**: react-toastify
- **Database**: MySQL (FreeSQLDatabase/PlanetScale/Railway etc.)
- **ORM/Driver**: mysql2
- **Hosting**: Vercel

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/school-management.git
cd school-management
```
### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a .env.local file in the root:

```bash
DB_HOST=your-db-host
DB_USER=your-db-username
DB_PASSWORD=your-db-password
DB_NAME=schooldb
```

### 4️⃣ Run the development server
```bash
npm run dev
```


App will be live at http://localhost:3000
