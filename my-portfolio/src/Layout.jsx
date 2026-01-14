import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
