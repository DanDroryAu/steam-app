import { MenuProps } from 'antd';
import { useLocation, useNavigate } from "react-router";
import { CaretRightFilled, HomeFilled } from "@ant-design/icons";
import { matchRoutes } from "react-router-dom";
import SideNav from "@/components/molecules/SideNav";

export const SideNavWidget = () => {
  const navItems = [
    { key: '1', label: 'Home', icon: <HomeFilled />, path: '/' },
    { key: '2', label: 'Games', icon: <CaretRightFilled />, path: '/games' },
  ];

  const currentLocation = useLocation();

  const navigate = useNavigate();
    
  const matches = matchRoutes(navItems, currentLocation);

  const selectedKeys = matches?.map((match) => match.route.key) || [];

  const navigateToPage: MenuProps['onClick'] = (item) => {
    navigate(navItems.find((navItem) => navItem.key === item.key)?.path || '/');
  };

  return (
    <SideNav items={navItems} onClick={navigateToPage} selectedKeys={selectedKeys} />
  );
};

export default SideNavWidget;
