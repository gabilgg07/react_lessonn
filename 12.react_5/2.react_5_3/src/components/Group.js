// import React, { useState, useEffect } from "react";
// import API from "../api/api";

const Group = ({ group }) => {
  // const [groupType, setGroupType] = useState({});

  // useEffect(() => {
  //   const getGroupType = async () => {
  //     const { data } = await API.get(`/GroupType/${group.groupTypeId}`);
  //     setGroupType(data);
  //   };
  //   getGroupType();
  //   // eslint-disable-next-line
  // }, []);
  return (
    <>
      <strong>Group:</strong> {group.name} <br />
      {/* <strong>Profession:</strong> {groupType.name} */}
    </>
  );
};

export default Group;
