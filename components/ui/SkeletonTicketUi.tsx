import { ScrollView } from "react-native";
import { Box } from "./box";
import { HStack } from "./hstack";
import { Skeleton, SkeletonText } from "./skeleton";
 export const SkeletonTicketUi = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="w-full h-auto gap-3 flex-row mt-2 mb-2 px-4"
    >
      <Box className="w-52 gap-4 mr-3 rounded-[1rem] p-3  bg-background-100">
        <Skeleton variant="sharp" className="h-[100px] rounded-[1rem]" />
        <HStack className=" px-2 flex-row justify-between ">
          <Skeleton variant="circular" className="w-3 h-3 rounded-full  " />
          <Skeleton variant="circular"  className="w-3 h-3 rounded-full  " />
        </HStack>
        <SkeletonText _lines={2} className="h-2" />
        <HStack className="  flex-row pr-11 ">
          <SkeletonText _lines={1} gap={0} className="h-2 w-1/4" />
          <SkeletonText _lines={1} gap={0} className="h-2 w-1/4" />
        </HStack>
      </Box>
      <Box className="w-52 gap-4 mr-3 rounded-[1rem] p-3  bg-background-100">
        <Skeleton variant="sharp" className="h-[100px] rounded-[1rem]" />
        <HStack className=" px-2 flex-row justify-between ">
          <Skeleton variant="circular" className="w-3 h-3 rounded-full  " />
          <Skeleton variant="circular" className="w-3 h-3 rounded-full  " />
        </HStack>
        <SkeletonText _lines={2} className="h-2" />
        <HStack className="  flex-row pr-11 ">
          <SkeletonText _lines={1} gap={0} className="h-2 w-1/4" />
          <SkeletonText _lines={1} gap={0} className="h-2 w-1/4" />
        </HStack>
      </Box>
      <Box className="w-52 gap-4 mr-3  rounded-[1rem] p-3  bg-background-100">
        <Skeleton variant="sharp" className="h-[100px] rounded-[1rem]" />
        <HStack className=" px-2  flex-row justify-between ">
          <Skeleton variant="circular" className="w-3 h-3 rounded-full  " />
          <Skeleton variant="circular" className="w-3 h-3 rounded-full  " />
        </HStack>
        <SkeletonText _lines={2} className="h-2" />
        <HStack className="  flex-row pr-11 ">
          <SkeletonText _lines={1} gap={0} className="h-2 w-1/4" />
          <SkeletonText _lines={1} gap={0} className="h-2 w-1/4" />
        </HStack>
      </Box>
    </ScrollView>
  );