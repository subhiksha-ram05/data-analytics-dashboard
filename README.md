# 📊 Data Analytics Dashboard

A full-stack **Data Analytics Dashboard** built using the **PERN Stack (PostgreSQL, Express.js, React.js, Node.js)**. The application provides secure user authentication, sales management, interactive analytics, CSV import/export, reporting, and responsive data visualization.

---

## 🌐 Live Demo

- **Frontend:** https://data-analytics-dashboard-tawny.vercel.app
- **Backend API:** https://dataanalyticsdashboard-server.onrender.com

---

# 📸 Screenshots

### Login Page - User authentication
<img width="1266" height="634" alt="Screenshot 2026-07-08 at 12 18 38 AM" src="https://github.com/user-attachments/assets/327ed776-6268-4805-910c-f9376251dd42" />

### Dashboard - KPI Cards & Analytics
<img width="1264" height="656" alt="Screenshot 2026-07-08 at 12 36 48 AM" src="https://github.com/user-attachments/assets/845966ef-0d26-4e5e-bdd7-3eab9cbb6f13" />

### Graph - Sales Visualization 
<img width="954" height="515" alt="Screenshot 2026-07-08 at 12 39 09 AM" src="https://github.com/user-attachments/assets/07631919-fdb1-433c-b70a-71e61523d98d" />

### Sales Management - Add/Edit/Delete Sales 
<img width="1267" height="568" alt="Screenshot 2026-07-08 at 12 30 47 AM" src="https://github.com/user-attachments/assets/dd487236-8323-4213-a0af-06c6fb7e31a5" />

### Reports - Reports Dashboard 
<img width="1267" height="586" alt="Screenshot 2026-07-08 at 12 36 06 AM" src="https://github.com/user-attachments/assets/63cedf9e-6953-4bbc-8c43-38eb29933591" />

### CSV Import/Export - Data Import & Export
<img width="468" height="241" alt="Screenshot 2026-07-08 at 12 45 24 AM" src="https://github.com/user-attachments/assets/1e3430b8-bce7-4f89-b2c9-6203a8d9e844" />


---

# ✨ Features

- 🔐 JWT Authentication
- 👤 Secure Login System
- 📊 Interactive Dashboard
- 📈 Sales Analytics
- 📉 Dynamic Charts
- 💰 KPI Cards
- ➕ Add Sales Records
- ✏️ Edit Sales Records
- ❌ Delete Sales Records
- 🔍 Search & Filter
- 📄 Reports Module
- 📥 CSV Import
- 📤 CSV Export
- 📱 Responsive Design

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Chart.js
- CSS

## Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

## Database

- PostgreSQL

## Deployment

- Frontend: Vercel
- Backend: Render
- Database: Render PostgreSQL

---

# 📂 Folder Structure

```
DataAnalyticsDashboard
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation Guide

## Clone Repository

```bash
git clone https://github.com/subhiksha-ram05/data-analytics-dashboard.git
```

Move into the project directory:

```bash
cd data-analytics-dashboard
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=8000

DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=analytics_dashboard

JWT_SECRET=your_secret_key
```

Start the backend:

```bash
npm start
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# 🔑 Environment Variables

### Backend (.env)

```env
PORT=8000

DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=

JWT_SECRET=
```

---

# 📊 Dashboard Features

- Revenue Overview
- Sales Summary
- KPI Cards
- Recent Sales
- Data Visualization
- Search Functionality
- Reports

---

# 📈 Charts Included

- Sales Trend Chart
- Revenue Chart
- Analytics Dashboard
- Performance Visualization

---

# 📦 API Endpoints

## Authentication

```
POST /api/auth/login
POST /api/auth/register
```

## Sales

```
GET    /api/sales
POST   /api/sales
PUT    /api/sales/:id
DELETE /api/sales/:id
```

## Reports

```
GET /api/reports
```

---

# 📱 Responsive Design

The application is fully responsive and works on:

- 💻 Desktop
- 💼 Laptop
- 📱 Mobile
- 📟 Tablet

---

# 🚀 Deployment

### Frontend

- Vercel

### Backend

- Render

### Database

- Render PostgreSQL

---

# 👩‍💻 Author

**Subhiksha Ram**

- GitHub: https://github.com/subhiksha-ram05
- LinkedIn: *(Add your LinkedIn profile URL here)*

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Future Enhancements

- Dark Mode
- Role-Based Access Control
- Advanced Analytics
- Email Notifications
- PDF Report Export
- Real-Time Dashboard
- Pagination
- Advanced Filters

---

## 🙌 Acknowledgements

- React.js
- Node.js
- Express.js
- PostgreSQL
- Chart.js
- Render
- Vercel

---

⭐ If you found this project useful, consider giving it a star on GitHub!
