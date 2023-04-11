import { Link, Outlet, Route, Routes } from "react-router-dom";

const AdditionalInfo = () => {
  return (
    <div>
      <h4>Additional information</h4>
      <ul>
        <Link to="casts">
          <li>Cacts</li>
        </Link>
        <Link to="reviews">
          <li>Reviews</li>
        </Link>
      </ul>
    </div>
  );
};

export default AdditionalInfo;