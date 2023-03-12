import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions";
import { Container, Table } from "react-bootstrap";
import ErrorPage from "./ErrorPage";

const userTest = {
  name: "Qabil",
};

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  let counter = 1;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // console.log(error);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      {loading && <div className="loading">loading...</div>}
      <Container className="my-4">
        {userTest}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>username</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {Boolean(users.length) &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{counter++}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Users;
