export const Square = ({ children, isSelected, updateboard, index }) => {
  const className = `square ${isSelected ? "isSelected" : ""}`;
  const handleClick = () => {
    updateboard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
