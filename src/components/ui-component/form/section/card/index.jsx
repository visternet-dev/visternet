import MainCard from "components/ui-component/cards/MainCard";

function CardSection({ children, title }) {
  return (
    <MainCard title={title} sx={{ width: "100%" }}>
      {children}
    </MainCard>
  );
}

export default CardSection;
