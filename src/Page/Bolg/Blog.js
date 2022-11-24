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
            <h3>Q:= What's Difference between SQL and NoSQL?</h3>
            <p> A:= RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable.Vertically Scalable. <br />
            Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.Horizontally scalable.Follows CAP(consistency, availability, partition tolerance)

.  </p>
        </div>
        <div className='qus'>
            <h3>Q:= What is JWT, and how does it work??</h3>
            <p>A :=JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required
            </p>
        </div>
        <div className='qus'>
            <h3>Q:= What is the difference between javascript and NodeJS?</h3>
            <p>A :=Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.	It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM.	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. <br />
            NodeJS is a Javascript runtime environment. browsers.	We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is used in server-side development.Nodejs is written in C, C++ and Javascript.
            </p>
        </div>
        <div className='qus'>
            <h3>Q := How does NodeJS handle multiple requests at the same time?</h3>
            <p>A:= Iterative - Incoming requests will go on a queue and be processed sequentially in the main loop. A interrupt handler, poll point in the loop, or a separate thread will accept incoming requests and append them to the queue as they arrive.
Multi-threading - The main loop will accept requests as they arrive and spawn a child thread to deal with it.
Multi-tasking - At startup the main line code will spawn a number of child processes, either copies of the primary server task or dedicated processor tasks. That number may be fixed or may be auto-ramping to spawn additional children as needed to handle the load. The main loop will then accept requests as they arrive and add them to a queue for one of the child processes either round robin or to the first child that is free. If requests arrive faster than the children can process them the main loop will either queue them for later processing as children free up or ramp up the number of children. </p>
        </div>
</div>
      

    </div>
    );
};

export default Blog;