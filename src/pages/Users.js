import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import User from "../components/User";

const Users = () => {
  

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div class="bg-light me-md-3 pb-12 pt-3 px-2 pt-md-5 px-md-5 text-center overflow-hidden">
        <User />
      </div>
      <div>
        <Footer />
      </div>
      </div>
  );
};

export default Users;
