
# Authentication App

A full-stack authentication application built with Django, Django REST framework, and React. This project demonstrates how to implement user authentication using JSON Web Tokens (JWT) with a RESTful API backend and a React frontend.

## Project Overview

This project showcases a modern approach to handling user authentication:

- **Backend:** Built with Django and Django REST framework, providing secure endpoints for user registration, login, and authentication token management.
- **Frontend:** Developed with React, utilizing hooks and the fetch API to interact with the backend, allowing seamless user authentication and data retrieval.

## Project Structure

The project is structured into two main folders:

- `frontend`: Contains the React frontend code.
- `backend`: Contains the Django backend code.

## Prerequisites

Before running this project, ensure you have the following installed:

- Python: Version 3.6+
- Node.js: Version 12+
- npm: Version 6+ or yarn: Version 1.22+
- Django: Version 3.0+
- Django REST framework: Version 3.0+
- React: Latest version

## Backend Setup

Navigate to the backend directory:

```bash
cd Authentication/backend
```

Create a virtual environment (optional but recommended):

```bash
python -m venv env
```

Activate the virtual environment:

On Windows:
```bash
env\Scripts\activate
```

On macOS/Linux:
```bash
source env/bin/activate
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

Apply database migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

The backend server should now be running at [http://localhost:8000](http://localhost:8000).

## Frontend Setup

Open a new terminal.

Navigate to the frontend directory:

```bash
cd Authentication/frontend
```

Install npm dependencies:

```bash
npm install
# or
yarn
```

Start the React development server:

```bash
npm start
# or
yarn start
```

The frontend server should now be running at [http://localhost:3000](http://localhost:3000).

## Usage

Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the React frontend.

The frontend communicates with the Django backend for authentication and other API operations.

## Technologies Used

- **Django:** Python web framework for building the backend.
- **Django REST framework:** Powerful and flexible toolkit for building Web APIs in Django.
- **React:** JavaScript library for building user interfaces.
- **fetch API:** Modern interface for fetching resources across the network, used in place of axios.
- **React Hooks:** Used for state management and side effects in functional React components.


```
This project is for demonstration purposes and may require additional configuration for production environments. Customize the frontend and backend code as per your project requirements.