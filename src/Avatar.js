import React from "react";
import { getInitials } from "./utils";
import styles from "./styles";

const Avatar = ({
  title,
  subtitle,
  showName,
  hideInitials,
  photo,
  color,
  size,
  addBorder,
  onClick,
  uniqueKey
}) => {
  const uKey = uniqueKey ? uniqueKey : "";
  return (
    <div className={`avatar${uKey}`} style={styles.container}>
      <div
        className={`avatar${uKey}__picture`}
        style={styles.picture(photo, showName, size, addBorder, color, title)}
      >
        {photo || !hideInitials ? getInitials(title) : null}
      </div>
      {showName ? (
        <div className={`avatar${uKey}__detail`}>
          <div className={`avatar${uKey}__detail--title`} style={styles.title}>
            {title}
          </div>
          <div
            className={`avatar${uKey}__detail--subtitle`}
            style={styles.subtitle}
          >
            {subtitle}
          </div>
        </div>
      ) : null}
    </div>
  );
};

Avatar.defaultProps = {
  addBorder: false,
  size: "small",
  onClick: () => ({})
};

export default Avatar;
