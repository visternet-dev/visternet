import MainCard from "components/ui-component/cards/MainCard";

function CardSection({ children, title, sx = {}, ...params }) {
  return (
    <MainCard title={title} sx={{ width: "100%", ...sx }} {...params}>
      {children}
    </MainCard>
  );
}

export default CardSection;
