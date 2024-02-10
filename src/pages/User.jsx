import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUser();
  }, [id]);

  if (!user) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto py-8 mt-[5rem]">
      <h2 className="m-2 text-2xl font-semibold text-center">User Details</h2>
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <img
          src={user?.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-medium text-xl">First Name : </span>{" "}
          {user.firstName}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-medium text-xl">Last Name : </span>{" "}
          {user.lastName}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-medium text-xl">Email : </span> {user.email}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-medium text-xl">Address : </span>{" "}
          {user.address.city}, {user.address.address}, {user.address.city}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-medium text-xl">Company Name : </span>{" "}
          {user.company.name}
        </p>
      </div>
    </div>
  );
};

export default User;
