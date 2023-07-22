interface MenuItemProps {
  onClickProp: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClickProp, label }) => {
  return (
    <div
      onClick={onClickProp}
      className={"px-4 py-3 hover:bg-neutral-100 transition font-semibold"}
    >
      {label}
    </div>
  );
};

export default MenuItem;
