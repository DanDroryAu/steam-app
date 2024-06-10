import { RouterComponent } from "@/router/RouterComponent.tsx";
import { ConfigProvider, theme } from "antd";

const App = () =>  {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <RouterComponent/>
    </ConfigProvider>
  );
};

export default App;
