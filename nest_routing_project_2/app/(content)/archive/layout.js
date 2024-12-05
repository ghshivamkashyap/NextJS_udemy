import React from "react";

const ArchiveLayout = ({ archive, latest }) => {


  return (
    <div className="  ">
      <section>
        <div className="flex justify-center items-center h-screen">
          {latest}
        </div>
      </section>{" "}
      <section>
        <div className="flex justify-center items-center h-screen">
          {archive}
        </div>
      </section>
    </div>
  );
};

export default ArchiveLayout;
