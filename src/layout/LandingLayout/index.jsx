import HeaderLanding from "./header";

function LandingLayout({ children }) {
  return (
    <div>
      <HeaderLanding />
      {children}
    </div>
  );
}

export default LandingLayout;
