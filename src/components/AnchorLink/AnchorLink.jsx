// eslint-disable-next-line react/prop-types
const AnchorLink = ({ href, children }) => {
  return (
    <a href={href} target="_blank" className="footer-links">
      {children}
    </a>
  );
};

export default AnchorLink;
