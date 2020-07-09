export const handleCarousel = (direction, length, index) => {
  let newIndex;

  switch (direction) {
    case "next":
      // console.log("next");
      newIndex = index === length - 1 ? 0 : index + 1;
      // console.log(newIndex);
      break;

    case "prev":
      // console.log("previous");
      newIndex = index === 0 ? length - 1 : index - 1;
      // console.log(newIndex);
      break;

    case "static":
      console.log("");
      break;

    case "scroll":
      console.log("default");
      newIndex = index === length - 1 ? 0 : index - 1;
      break;

    default:
      console.log("default");
  }

  return newIndex;
};

// export const handleCarouselRotate = (direction, length, index) => {
//   console.log("ROTATE");
//   setTimeout(handleCarousel(direction, length, index), 5000);
// };
