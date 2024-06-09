import { Layout } from "antd";
import classes from './AppLayout.module.scss';

const { Content } = Layout;


export type Props = {
    children: React.ReactNode;
    sidebar: React.ReactNode;
    header: React.ReactNode;
    footer: React.ReactNode;
}

export const AppLayout = ({ children, sidebar, header, footer }: Props) => <Layout hasSider>
  {sidebar}
  <Layout className={classes.layout}>
    {header}
    <Content className={classes.content}>
      {children}
    </Content>
    {footer}
  </Layout>
</Layout>;
