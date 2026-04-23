#  EventZone

« Your event - Our Plan»

##  Project Overview

EventZone is a full-stack MERN web application that allows users to explore, plan, and book different types of events easily. The platform simplifies event management by providing an online system where users can register, login, view available events, and book them without manual coordination. The application provides a smooth and interactive interface for managing event bookings efficiently.

##  Key Features

* User Registration & Login
* Browse Different Event Categories
* Emotion-based Events bookings
* Event Booking System
* Booking Details with Date & Comments
* Secure Authentication
* Responsive User Interface

##  Tech Stack

Category | Technology
Frontend | React.js
Backend | Node.js, Express.js
Database | MongoDB
Deployment | AWS EC2

##  Project Structure

EventZone/
│
├── backend/           # API, database models, routes
├── react-project/        # React frontend application
├── package.json
└── README.md

##  Installation & Setup

###  Step 1: Clone Repository

git clone https://github.com/Psvkokila/EventZone.git
cd react-project

###  Step 2: Install Dependencies

**Backend**

cd backend
npm install

**Frontend**

cd react-projeect
npm install

### Step 3: Run Application

**Backend**
npm start

**Frontend**
npm run dev

##  API

* Base URL: `http://localhost:5000`

APIs used in the system:

* `POST /api/users/register` → User registration
* `POST /api/users/login` → User login
* `GET /api/events` → Fetch available events
* `POST /api/bookings/book` → Book an event

##  Future Enhancements

*  Event demo preview before booking
*  Online payment integration
*  Vendor services (decorators, photographers)
*  Notification system for booking updates

##  Project Goal

The goal of EventZone is to simplify the event booking process by providing an online platform where users can easily explore events and book them quickly without manual coordination.

##  Author

Kokila

## Support

If you like this project, consider giving it a ⭐ on **GitHub**.


