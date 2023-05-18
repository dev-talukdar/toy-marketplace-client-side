

const Blog = () => {
    return (
        <div className=" container mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
                <h2 className="font-semibold text-teal-600 mb-6"> question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="text-purple-600 mb-6">Access Token is a credential that allows access to protected resources, granting API/server access. It has a short lifespan and can be stored in memory or secure browser storage like localStorage.

                    Refresh Token, on the other hand, is used to obtain a new access token without reauthentication. It serves the purpose of seamless token refreshing and has a long lifespan, lasting for days or weeks. Refresh Tokens are typically stored server-side as HTTP-only cookies.
                    Please note that storing tokens securely is of utmost importance to protect against unauthorized access.</p>
            </div>

            <div className="text-center">
                <h2 className="font-semibold text-teal-600 mb-6"> question 2: Compare SQL and NoSQL databases?</h2>
                <p className="text-purple-600 mb-6">SQL databases are structured, relational databases that use structured query language (SQL) for data management. They have predefined schemas and are ideal for complex queries and transactions. NoSQL databases, on the other hand, are non-relational databases that provide flexible schemas and use a variety of data models. They are great for handling large amounts of unstructured data and scalable applications.</p>
            </div>

            <div className="text-center">
                <h2 className="font-semibold text-teal-600 mb-6"> question 3: What is express js? What is Nest JS</h2>
                <p className="text-purple-600 mb-6">Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features for building web applications and APIs, such as routing, middleware support, and request/response handling. Express.js is widely used and known for its simplicity and ease of use, making it a popular choice for creating server-side applications in JavaScript. <br /> <br />

                    Nest.js, on the other hand, is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built on top of Express.js and utilizes TypeScript as its primary language. Nest.js follows a modular architecture and incorporates features from other popular frameworks like Angular. It provides a solid foundation for building enterprise-level applications with support for dependency injection, middleware, routing, and more. Nest.js promotes code reusability, testability, and structured development practices.</p>
            </div>

            <div className="text-center">
                <h2 className="font-semibold text-teal-600 mb-6"> question 4: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="text-purple-600 mb-6">MongoDB  aggregate is a powerful aggregation framework that allows for advanced data processing and analysis within the database. It provides a way to perform complex operations on collections of documents and retrieve aggregated results.<br />

                    The aggregate pipeline in MongoDB consists of multiple stages, each performing a specific operation on the data. These stages can include filtering, grouping, sorting, transforming, and performing calculations on the data. The pipeline operates on the input documents sequentially, passing the results from one stage to the next.<br />

                    Each stage in the pipeline takes input documents, processes them, and produces output documents that serve as input for the next stage. This allows for flexible and efficient data manipulation and aggregation. The stages in the pipeline can include:<br />

                    Match: Filters the documents based on specified conditions.<br />
                    Group: Groups documents together based on a specified key and performs calculations on the grouped data.<br />
                    Project: Reshapes the documents by including or excluding specific fields.<br />
                    Sort: Sorts the documents based on specified criteria.<br />
                    Limit: Restricts the number of documents in the output<br />
                    Skip: Skips a specified number of documents from the output<br />
                    Unwind: Deconstructs an array field from the input documents into multiple separate documents<br />
                    Lookup: Performs a left outer join with another collection based on specified conditions<br />
                    By combining these stages and leveraging their various operations, the aggregate framework allows for complex data analysis<br /> aggregation, and transformation directly within the database, reducing the need for client-side processing and improving performance<br />

                    Overall, MongoDB  aggregate framework provides a flexible and efficient way to perform advanced data processing<br /> and aggregation tasks, enabling powerful analytics and reporting capabilities within the database itself<br />





                </p>
            </div>
        </div>

    );
};

export default Blog;