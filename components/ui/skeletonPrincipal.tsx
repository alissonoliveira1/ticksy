import { Dimensions } from "react-native";
import { Box } from "./box";
import { Skeleton } from "./skeleton";

export const SkeletonPrincipal = () => {
         const { width } = Dimensions.get("window");
          const viewWidth = width * 0.9;
          const viewHeight = 200;
    return (
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
    )

}