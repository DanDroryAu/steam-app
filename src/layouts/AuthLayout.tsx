import { Layout } from 'antd';
import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default AppLayout;
