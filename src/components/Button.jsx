const Button = (props) => {
  const { onClick, cta, value } = props;
  return (
    <button onClick={() => onClick(value || null)}>
      {cta}
    </button>
  );
};

export default Button;