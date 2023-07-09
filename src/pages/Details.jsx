import { useNavigate, useParams } from "react-router-dom";

export const Details = () => {
   const { name } = useParams();
   const navigate = useNavigate();
  return (
    <div>
      Details name={name} navigate={navigate}
    </div>
  );
};
