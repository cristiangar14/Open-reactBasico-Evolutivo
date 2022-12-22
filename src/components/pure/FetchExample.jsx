import React, { useEffect, useState } from "react";
import {
  getAllPagedUsers,
  getAllUsers,
  getUserDetails,
  login,
} from "../../services/fetchService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [totalUsers, setTotalUsers] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(6);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getAllUsers()
      .then((response) => {
        console.log("All users", response.data);
        setUsers(response.data);
        setPages(response.total_pages);
        setTotalUsers(response.total);
        setUsersPerPage(response.per_page);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtainig users");
        console.table(users);
      });
  };

  const optainPageUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        console.log("All paged users", response.data);
        setUsers(response.data);
        setPages(response.total_pages);
        setTotalUsers(response.total);
        setUsersPerPage(response.per_page);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtainig users");
        console.table(pages);
      });
  };

  const obtainUserDetails = (id) => {
    getUserDetails(id)
      .then((response) => {
        setSelectedUser(response.data);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtainig users");
        console.table(selectedUser);
      });
  };

  const authUser = (email, password) => {
    login(email, password).then((response) => {
        sessionStorage.setItem('token', response.token)
      })
      .catch((error) => {
        alert(`Error while login users: ${error}`);
      })
      .finally(() => {
        console.log("Ended login users. Nvigate to Home...");
      });
  }

  return (
    <div>
      <button onClick={() => authUser('eve.holt@reqres.in', 'cityslicka')}>Login</button>
      <h2>Users:</h2>
      {users.map((user, index) => (
        <p key={index} onClick={() => obtainUserDetails(user.id)}>
          {user.first_name} {user.last_name}
        </p>
      ))}
      <p>
        Showing {usersPerPage} of {totalUsers} in total
      </p>
      <button onClick={() => optainPageUsers(1)}>1</button>
      <button onClick={() => optainPageUsers(2)}>2</button>
      <div>
        <h3>User Details</h3>
        {selectedUser ? (
            <div className="">
            <p>Name: {selectedUser.first_name}</p>
            <p>Last name: {selectedUser.last_name}</p>
            <p>Email: {selectedUser.email}</p>
            <img src={selectedUser.avatar} alt={selectedUser.first_name} style={{height:'150px', width: '150px'}}/>
          </div>
        ) : <h6>Pelase click on a user to see its details</h6>}
      </div>
    </div>
  );
};

export default FetchExample;
