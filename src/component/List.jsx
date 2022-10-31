import React from "react";

const List = ({ addList }) => {
  return (
    <div>
      {addList.length > 0 && (
        <table width="100%" className="mt-3">
          <thead>
            <tr className="head-tr">
              <th>Firstname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {addList.map((item, index) => {
              const { name, dob, phone, email } = item;

              return (
                <tr className="body-tr" key={index}>
                  <td>{name.first}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{dob.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default List;
