import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Header } from "../components";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <div className="min-h-screen flex items-center justify-center">
          <span className="loading loading-ring loading-lg" />
        </div>
      ) : (
        <main>
          <section className="align-element  min-h-screen">
            <Outlet />
          </section>
        </main>
      )}
      <Footer />
    </>
  );
};
export default HomeLayout;
