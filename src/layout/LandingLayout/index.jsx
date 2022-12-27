import FooterLanding from "./footer";
import HeaderLanding from "./header";

function LandingLayout({ children }) {
  return (
    <div>
      <HeaderLanding />
      {children}
      <FooterLanding />
    </div>
  );
}

export default LandingLayout;
