import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react-native";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";

interface AlertUiProps {
    erros: string;
}

export const AlertUi = ({erros}:AlertUiProps) => {
    return(
         <Animated.View 
            entering={SlideInRight.duration(300)} 
            exiting={SlideOutLeft.duration(200)}
        
          >
            <Alert action="success" variant="outline">
              <AlertIcon as={AlertTriangleIcon} />
              <AlertText>{erros}</AlertText>
            </Alert>
          </Animated.View>
    )
}