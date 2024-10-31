# Help Desk Application

## Overview

The Help Desk Application is a MERN stack application designed to provide support ticket management. It allows users to create, manage, and track support tickets. The application supports three user roles: **Customer**, **Customer Service Agent**, and **Admin**.

## Features

- **User Registration and Login**: Customers can register and log in to the application.
- **Ticket Management**:
  - Customers can create tickets, add notes, and track their status.
  - Customer Service Agents and Admins can view all tickets, update their status, and add notes.
- **Roles and Permissions**:
  - Customers can only manage their tickets.
  - Customer Service Agents can manage tickets for all customers.
  - Admins have full access to manage users and tickets.
- **Responsive Design**: The application is built with Tailwind CSS, ensuring a responsive user interface.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Installation

### Prerequisites

- Node.js
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/Dm7898/help-desk-mearn.git
cd help-desk-mearn
