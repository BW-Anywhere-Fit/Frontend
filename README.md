## Pitch

These days, fitness classes can be held anywhere - a park, an unfinished basement or a garage - not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing. While you could use several mobile apps to accomplish this, AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.

## MVP

1. User can create/register as a "Client" and login with the registered credentials.(web, mobile)
2. User can create/register as an "Instructor" by entering an additional Auth Code during signup, and can login with the registered credentials.(web, mobile)
3. "Client" and "Instructor" are both presented with the appropriate onboarding walkthrough on first signin, with an option to skip it.(UX, mobile)
4. Authenticated "Instructor" can create update and delete a "Class". At a minimum, each "class" must have the following properties(web, mobile):

   - Name
   - Type
   - Start time
   - Duration
   - "Intensity" level
   - Location
   - Current number of registered attendees
   - Max class size

5. Authenticated "Instructor" can create "virtual" punch pass categories for each type of group fitness class they offer (yoga, insanity, RIPPED, HIGH, pilates, etc.)(mobile)
6. Authenticated "Client" can search for avaialble classes. At a minimum, they must be able to search by the following criteria(web, mobile):
   - class time
   - class date
   - class duration
   - class type
   - "Intensity level"
   - class location
7. Authenticated user can reserve a spot in a class with available seats open, and can reschedule or cancel their current reservation from the mobile app(mobile).

## Stretch

1. Implement payments using PayPal, Stripe or another 3rd party API(web, mobile)

## Unit Rubrics:

U2: https://www.notion.so/Web-Unit-2-b9f9c21279964ea4b923ca6252f15421
U3: https://www.notion.so/Web-Unit-3-49465ea3a66440c89b593452e60ba8f8

### Your role as a Front End Developer(U2) is work on the features of the product that allow you to demonstrate mastery over the concepts such as:

- Network request for reading data
- Displaying and laying out the information received from a 3rd API
- Implementing industry standards in regards to the way that your React Components are
- architected and developed, i.e. hooks are used and implemented correctly
- Proper usage of React Router
- Forms in the app are managed well, including the use of form validation
- Your application should be built to demonstrate that your app solves the problem your team set out to solve.
  - Focus the displaying of information and working with other members of your team to ensure that users can seamlessly navigate through the tools that you’re building.

### Your role as a Front End Framework Developer(U3) is to work on the features of the product that allow you to demonstrate mastery over the concepts such as:

- Planning and developing a state management system for your application
- Handle HTTP requests for all CRUD methods
- Implementing client-side authentication in conjunction with the BE developer
- Implementing industry standards in regards to the way that you manage state in your React application.
- Implement some testing into your application
- Your application should be built to demonstrate that your app solves the problem your team set out to solve. Focus the displaying of information and working with other members of your team to ensure that users can seamlessly navigate through the tools that you’re building.
