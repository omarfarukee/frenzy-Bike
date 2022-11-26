import React,{useEffect} from 'react';
import ('./Blog.css')
const Blog = () => {
    useEffect(() =>{
        document.title = 'Blog'
     }, [])
    return (
        <div >
        {/* <div className='ans'>
            <h1>Few Regular Asking Qus-Ans</h1>
        </div> */}
    <div >
        <div className='qus'>
            <h3>Q:= What are the different ways to manage a state in a React application?</h3>
            <p> A:= Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.You can see the benefit of useReducer versus useState in this vote tracking example. All we have to do to update state is pass the callback function dispatch a string (which is then passed to the reducer) instead of the new state itself

.  </p>
        </div>
        <div className='qus'>
            <h3>Q:= How does prototypical inheritance work?</h3>
            <p>A :=Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using.
            </p>
        </div>
        <div className='qus'>
            <h3>Q:= What is a unit test? Why should we write unit tests?</h3>
            <p>A :=Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.




            </p>
        </div>
        <div className='qus'>
            <h3>Q := What's the difference between React vs. Angular vs. Vue?</h3>
            <p>A:= react- <br />
            React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive , <br />
            Vue - <br />
            The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.SFCs are the recommended way to organize code in Vue.js projects, especially larger ones. Tools such as Webpack or Browserify are required to transpile SFCs into working JavaScript code. <br />
            Angular - <br />
            AngularJS, the original framework, is an MVC (Model-View-Controller) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular applications. While Angular doesn’t enforce their use, it’s highly suggested to structure apps as a set of distinct services that can be reused.Angular is built in TypeScript, so its use is recommended to get the most seamless experience, but plain JavaScript is also supported.
            </p>
        </div>
</div>
      

    </div>
    );
};

export default Blog;