import React from "react";
import "../styles.css";

interface ItemWrapperProps {
  children: any;
  isDragging?: boolean;
}

const ItemWrapper: React.FC<ItemWrapperProps> = ({
  isDragging = false,
  children,
}) => {
  return <div style={{ borderColor: isDragging ? "Red" : "" }}>{children}</div>;
};

export default ItemWrapper;
