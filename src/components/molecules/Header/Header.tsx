import { Layout, theme } from 'antd';

const { Header } = Layout;

export type Props = {
    children: React.ReactNode,
};

export const HeaderComponent = ({
  children,
}: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
    
  return <Header style={{ background: colorBgContainer }} >{children}</Header>;
};

export default HeaderComponent;
