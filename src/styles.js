import { generateRandomColor, getContrast } from "./utils";

const sizeInPx = {
  xsmall: 16,
  small: 32,
  medium: 48
};

const fontSizeInPx = {
  xsmall: 8,
  small: 11,
  medium: 13
};

const styles = {
  picture(photo, showName, size, addBorder, color, title) {
    const style = {
      textTransform: "uppercase",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };

    const backgroundColor = generateRandomColor(title);
    const textColor = getContrast(backgroundColor)

    const sizeInPixels = sizeInPx[size];
    const fontSizeInPixels = fontSizeInPx[size];

    const sizes = {
      fontSize: fontSizeInPixels,
      width: sizeInPixels,
      height: sizeInPixels,
      flex: `0 0 ${sizeInPixels}px`
    };

    const background = photo
      ? {
          background: `url(${photo})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          color: "#fff"
        }
      : {
          backgroundColor,
          color: textColor
        };

    return {
      ...style,
      ...sizes,
      ...background,
      marginRight: showName ? "8px" : 0,
      border: addBorder
        ? size === "xsmall"
          ? "1px solid white"
          : "2px solid white"
        : 0
    };
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    margin: "0px"
  },
  subtitle: {
    color: "rgb(116, 116, 116)",
    margin: "0px"
  }
};

export default styles;
