import React from "react";

const User = (props) => {
  const {
    id,
    name,
    email,
    phone,
    username,
    website,
  } = props

  const removeUser = (id) => {
    props.onRemove(id);
  };

  return (
    <article>
      <h3>Username: {username}</h3>
      <h3>Name: {name}</h3>
      <p>E-mail: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <button
        onClick={() => removeUser(id)}
      >
        Delete User{" "}
        <i className="fa fa-trash " />
      </button>
    </article>
  );
};

export default User;
