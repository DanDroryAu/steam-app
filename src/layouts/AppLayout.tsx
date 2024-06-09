import { Outlet } from "react-router";
import AppLayoutComponent from '@/components/organisms/AppLayout';
import SideNavWidget from "@/widgets/SideNavWidget";
import HeaderWidget from "@/widgets/HeaderWidget";
import FooterWidget from "@/widgets/FooterWidget";

export const AppLayout = () => {
  return (
    <AppLayoutComponent
      sidebar={<SideNavWidget />}
      header={<HeaderWidget />}
      footer={<FooterWidget />}
    >
      <Outlet />
    </AppLayoutComponent>
  );
};

export default AppLayout;
