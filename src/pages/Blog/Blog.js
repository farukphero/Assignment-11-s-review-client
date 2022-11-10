import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('blog')
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-96 img-gradient"
          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ev4lerCx4LRoMY6ZexLmeFH04hPpV04tYQ&usqp=CAU"
          alt=""
        />
        <p className="absolute top-52 left-0 md:left-28 text-indigo-400 text-3xl md:text-6xl font-semibold">
          {" "}
          Know Your Desired Questions
        </p>
      </div>
      <div className="w-3/4 mx-auto rounded">
        <div className="text-black mt-20">
          <div>
            <h1 className="text-3xl text-center bg-slate-400 p-4">
              Difference between SQL and NoSQL.
            </h1>
            <p className="bg-cyan-200 p-3">
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL. SQL
              databases defines and manipulates data based structured query
              language (SQL). Seeing from a side this language is extremely
              powerful. SQL is one of the most versatile and widely-used options
              available which makes it a safe choice especially for great
              complex queries. But from other side it can be restrictive. SQL
              requires you to use predefined schemas to determine the structure
              of your data before you work with it. Also all of your data must
              follow the same structure. This can require significant up-front
              preparation which means that a change in the structure would be
              both difficult and disruptive to your whole system. A NoSQL
              database has dynamic schema for unstructured data. Data is stored
              in many ways which means it can be document-oriented,
              column-oriented, graph-based or organized as a KeyValue store.
              This flexibility means that documents can be created without
              having defined structure first. Also each document can have its
              own unique structure. The syntax varies from database to database,
              and you can add fields as you go.
            </p>
          </div>
        </div>
        <div className="text-black mt-20">
          <div>
            <h1 className="text-3xl text-center bg-slate-400 p-4">
              What is JWT, and how does it work?
            </h1>
            <p className="bg-cyan-200 p-3">
              <b>JWT</b>, or JSON Web Token, is an open standard used to share
              security information between two parties — a client and a server.
              Each JWT contains encoded JSON objects, including a set of claims.
              JWTs are signed using a cryptographic algorithm to ensure that the
              claims cannot be altered after the token is issued.
              <br /><br />
              JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. <br /> <br />The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. <br /> <br />The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. 
            </p>
          </div>
        </div>
        <div className="text-black mt-20">
          <div>
            <h1 className="text-3xl text-center bg-slate-400 p-4">
              What is the difference between javascript and NodeJS?
            </h1>
            <p className="bg-cyan-200 p-3">
              1. NodeJS : <br />
              NodeJS is a cross-platform and opensource Javascript runtime
              environment that allows the javascript to be run on the
              server-side. Nodejs allows Javascript code to run outside the
              browser. Nodejs comes with a lot of modules and mostly used in web
              development. <br />
              2. JavaScript : <br />
              Javascript is a Scripting language. It is mostly abbreviated as
              JS. It can be said that Javascript is the updated version of the
              ECMA script. Javascript is a high-level programming language that
              uses the concept of Oops but it is based on prototype inheritance.
            </p>
          </div>
        </div>
        <div className="text-black mt-20">
          <div>
            <h1 className="text-3xl text-center bg-slate-400 p-4">
              How does NodeJS handle multiple requests at the same time?
            </h1>
            <p className="bg-cyan-200 p-3">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
