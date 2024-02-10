import { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import UserFormModal from "./UserFormModal";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Memoized filteredUsers based on users and query
  const filteredUsers = useMemo(() => {
    const query = searchParams.get("search");
    const sort = searchParams.get("sort");

    const sortUsers = (a, b) => {
      switch (sort) {
        case "name":
          return a.firstName.localeCompare(b.firstName);
        case "email":
          return a.email.localeCompare(b.email);
        case "company":
          return a.company.name.localeCompare(b.company.name);
        default:
          return 0;
      }
    };

    if (query && sort) {
      return users
        .filter((user) =>
          user.firstName?.toLowerCase().includes(query?.toLowerCase())
        )
        .sort(sortUsers);
    } else if (query) {
      return users.filter((user) =>
        user.firstName?.toLowerCase().includes(query?.toLowerCase())
      );
    } else if (sort) {
      return users.sort(sortUsers);
    } else {
      return users;
    }
  }, [users, searchParams]);

  if (loading) {
    return <Loader />;
  }

  const addUser = (user) => {
    const newUsers = [user, ...users];
    setUsers(newUsers);
  };

  return (
    <>
      <UserFormModal addUser={addUser} />
      <div className="container max-w-7xl mx-auto py-2 ">
        {/* User Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <Link
                to={`/user/${user.id}`}
                className="text-lg font-bold mb-2 underline"
              >
                {user.firstName} {user.lastName}
              </Link>
              <p className="text-gray-600 mb-2">{user.email}</p>
              <p className="text-gray-600 mb-2">
                {user.address.address}, {user.address.city}
              </p>
              <p className="text-gray-600">{user.company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
