import React from 'react';

const Blog = () => {
     return (
          <div className='m-5'>
               <div className='my-5'>
                    <h3>1. what is cors? </h3>
                    <p>  CORS is the mechanism that provides the ability to alter the behavior of this policy, enabling you to do things like hosting static content at www.example.com and the backend API at api.example.com. This kind of request would be called a Cross-Origin request, as a resource from one subdomain is requesting a resource from another subdomain.

                         This is all controlled through preflight requests that exchange a set of HTTP request headers and corresponding response headers collectively referred to as "CORS Headers", each of these headers modifies a different element of the Same-Origin policy to loosen the limitations it imposes. </p>
               </div>
               <div>
                    <h3>2.1  Why are you using firebase? </h3>
                    <p> The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
               </div>
               <div>
                    <h3>2.2   What other options do you have to implement authentication? </h3>
                    <p> a. MongoDB. <br />
                         b. Oracle Database. <br />
                         c. Amazon Redshift. <br />
                         d. DataStax Enterprise. <br />
                         e. Redis Enterprise Cloud. <br />
                         f. Cloudera Enterprise Data Hub. <br />
                         g. Couchbase Server.</p>
               </div>
               <div className='my-5'>
                    <h3>3. How does the private route work? </h3>
                    <p> He private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                         What are protected routes?
                         Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page </p>
               </div>
               <div className='my-5'>
                    <h3>4.1  What is Node? </h3>
                    <p>
                         A node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers. What is node used for?
                         Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications </p>
               </div>
               <div className=''>
                    <h3>4.2  How does Node work? </h3>
                    <p> It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. What does node actually do?
                         Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications. </p>
               </div>
          </div>
     );
};

export default Blog;