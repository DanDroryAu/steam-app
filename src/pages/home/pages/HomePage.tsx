import classes from './HomePage.module.scss';
import { Button } from "antd";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/games');
  };

  return (
    <div className={classes.homePage}>
      <h1>Welcome to the steam playtime app.</h1>
      <p>
        This app allows you to search for a steam user and view their playtime
        statistics.
      </p>
      <Button type="primary" onClick={handleClick}>Get started</Button>
    </div>
  );
};
