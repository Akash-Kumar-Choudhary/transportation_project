import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = (props) => {
  return (
    <div>
      <Header />
      <main style = {{minHeight:'80vh'}}>{props.children}</main>
      <Footer />
    </div>
  );
};
