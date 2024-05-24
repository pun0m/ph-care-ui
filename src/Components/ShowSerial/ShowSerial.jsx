import React from "react";
import useShowSerial from "../../hooks/useShowSerial";

const ShowSerial = () => {
  const [showSerial] = useShowSerial();

  return (
    <div style={{ padding: "120px", textAlign:'center' }}>
      <h2 className="text-4xl">Show Serial </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th># </th>
              <th>Name</th>
              <th>Age</th>
              <th>Syntoms</th>
            </tr>
          </thead>
          <tbody>
            {showSerial.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.syntom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowSerial;
