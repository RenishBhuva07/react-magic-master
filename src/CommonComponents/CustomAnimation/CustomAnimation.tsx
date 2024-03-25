import Lottie from "lottie-react";

interface ICustomAnimationProps {
  animationFile: any;
  animationStyle?: any;
}
export const CustomAnimation = (props: ICustomAnimationProps) => {
  const { animationFile, animationStyle } = props;
  const myAnimationStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <Lottie
      style={animationStyle ? animationStyle : myAnimationStyle}
      animationData={animationFile}
      autoPlay={true}
      loop={true}
    />
  );
};
// const styles = StyleSheet.create({
//   animationView: {
//     height: ResponsivePixels.size100,
//     width: ResponsivePixels.size100,
//   },
// });