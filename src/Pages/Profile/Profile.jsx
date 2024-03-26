import React from "react";
import ProfileUserDetails from "../../Component/ProfileComponents/ProfileUserDetails";
import RegUserPostPart from "../../Component/ProfileComponents/RegUserPostPart";

const Profile = () => {
  return (
    <div className="w-full px-20">
      <div>
        <ProfileUserDetails />
      </div>
      <div>
        <RegUserPostPart />
      </div>
    </div>
  );
};

export default Profile;
