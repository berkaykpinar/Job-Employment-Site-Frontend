import { useSelector } from "react-redux";
import { useParams } from "react-router";

const ProfileDetails = () => {
  const { userId } = useParams();
  const loginType = useSelector((type) => type.loginType);

  return <div>{userId}</div>;
};

export default ProfileDetails;
