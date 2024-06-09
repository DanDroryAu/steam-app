import { Layout, Menu, MenuProps } from 'antd';
import classes from "./styles.module.scss";

const { Sider } = Layout;

export type Props = {
    items: MenuProps['items'];
    selectedKeys?: string[];
    onClick: MenuProps['onClick'];
}

export const SideNav = ({ items, onClick, selectedKeys }: Props) => (
  <Sider className={classes.sideNav}>
    <div className={classes.icon}>
      <img src="https://img.itch.zone/aW1nLzE0ODYzNTM4LnBuZw==/original/TEWtuP.png" alt="logo" />
    </div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} selectedKeys={selectedKeys} items={items} onClick={onClick} />
  </Sider>
);

export default SideNav;
