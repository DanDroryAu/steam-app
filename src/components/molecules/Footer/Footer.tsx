
import { Layout } from 'antd';

const { Footer: AntdFooter } = Layout;

export type Props = {
  children: React.ReactNode;
}

export const Footer = ({ children }: Props) => (
  <AntdFooter>
    {children}
  </AntdFooter>
);

export default Footer;
