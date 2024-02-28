const SectionTitle = ({ title }) => {
  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "800",
  };
  return <h3 style={titleStyle}>{title}</h3>;
};

export default SectionTitle;
