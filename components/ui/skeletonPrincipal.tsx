import { Dimensions, View } from "react-native";
import { Box } from "./box";
import { Skeleton } from "./skeleton";

export const SkeletonPrincipal = () => {
         const { width } = Dimensions.get("window");
          const viewWidth = width * 0.9;
          const viewHeight = 200;
    return (
      <View className="">
          <Box style={{ width: viewWidth,
              height: viewHeight,
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: 16,
              position: "relative",}}
               className=" bg-background-100">
        <Skeleton variant="sharp" style={{height:viewHeight}} className=" rounded-[1rem]" />
       
        
         
      </Box>
      <Box className="w-full pt-6 justify-center items-center" style={{ width: viewWidth}}>
        <Skeleton variant="text" style={{ width:200, height:10}} className=" rounded-[1rem]" />
      </Box>
      <Box className="w-full  flex-row pt-8 justify-evenly items-center" style={{ width: viewWidth}}>
        <Skeleton variant="text" style={{ width:130, height:10}} className=" rounded-[1rem]" />
        <Skeleton variant="text" style={{ width:130, height:10}} className=" rounded-[1rem]" />
      </Box>
      <Box className="w-full gap-5 flex-row pt-8 justify-center items-center" style={{ width: viewWidth}}>
        <Skeleton variant="circular" style={{ width:10, height:10}} />
        <Skeleton variant="circular" style={{ width:10, height:10}}  />
        <Skeleton variant="circular" style={{ width:10, height:10}}  />
      </Box>
      </View>
    )

}