## Getting Started

Step 1: Clone the repository to your local system. Ensure not to fork it.

Step 2: Create a new branch - "your_name_vidyalai" in your local repository for making changes.

Step 3: Install packages and make sure you are using Node.js version 18.20 or higher.

```bash
npm i
```

Step 4: Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result and complete the tasks mentioned below:

## Objective

Develop an authentication system utilizing Next.js + Nest.js where Next.js in the frontend and Nest.js in the backend. The system should include signup, login and dashboard pages with a focus on making it easy for users while encuring user experience, security and performance.

### Pages
1. Signup page
2. Login page
3. Dashboard page (accessible after successfully login)
   
### Required functions:
- HTTP Cookie-based authentication with JWT (JSON Web Tokens) 
- Store user infomation in mongodb
- Hash password with salt
- Restrict access to the dashboard page until login; redirect to the login page if unauthorized access is attempted. Handle this condition in the backend (Nest.js).
- Handle frontend error and dispay error below each input fields using yup package(https://www.npmjs.com/package/yup)
- Handle backend errors and display error in frontend
- Ensure signup and login page UI is neat and responsive on small screen devices.

### Points deduction for:
- Bugs and issues
- Inefficient code
- Performance bottlenecks and scalability issues due to inefficient code or database queries.
- Inadequate error handling resulting in poor user experience and potential security risks.

### Extra points for :
- Adding comments to briefly describe important functions
- Using strict type in backend
- Utilizing typescript in frontent(nestjs)
- Using signed cookie to save access tokens
- Implementing refresh tokens to create access tokens upon expiration
- Running this project in build version (production version) instead of development version
- Adding class-validation to signup and login payload in nestjs (https://docs.nestjs.com/techniques/validation)
- Implement rate limiter to mitigate brute-force login attacks.
- Adding 404 page

### User schema
``` typescript
interface User {
  name: {
    first: string;
    last: string;
  };
  phone: {
    countryCode: string;
    number: string;
  };
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
```


## Submission
- Create a new public repository in your github account

- Push the changes from your local to the new repo on GitHub.

- Update the readme by putting a check mark against the tasks you have completed. If you have not completed all the tasks, make sure to tick all the relevant ones. 

- Open a pull request from "your_name_vidyalai" to "master"
Fill [this form](https://docs.google.com/forms/d/e/1FAIpQLSeACdInJitqQ8hncrJdsTYEXVuts0Rb_WlMhLihXz06MTFmwA/viewform) with a link to the pull request 




