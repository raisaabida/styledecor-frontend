import React from "react";
import { Link } from "react-router-dom";


export default function ErrorPage()
 {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold text-teal-500">404</h1>
      <p className="text-lg mt-2">Page Not Found</p>

      <Link to="/" className="btn btn-primary mt-4">
        Go Home
      </Link>
    </div>
  );
}
