import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import DateTimePicker, {
    DateType,
    useDefaultStyles,
} from "react-native-ui-datepicker";


interface ModalDateProps {
  datePickerVisible: boolean;
  selectedDate: DateType | undefined;
  setDatePickerVisible: (visible: boolean) => void;
  setSelectedDate: (date: DateType) => void;
}
export const ModalDate = ({
  datePickerVisible,
  selectedDate,

  setDatePickerVisible,
  setSelectedDate,
}: ModalDateProps) => {
  const defaultStyles = useDefaultStyles();
  return (
        <>
          {datePickerVisible && (
            <View className=" w-full h-full  absolute top-0 left-0  justify-center items-center">
              <LinearGradient
                colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.6)"]}
                className=" w-full h-full absolute top-0 left-0 z-10 justify-center items-center"
                style={{ flex: 1 }}
              >
                <View className=" m-5 rounded-md z-20  bg-white top-0 left-0 right-0">
                  <DateTimePicker
                    mode="single"
                 
                  
                    date={selectedDate}
                    onChange={({ date }) => {
                      if (date) {
                        setDatePickerVisible(false);
                        setSelectedDate(date);
                      }
                    }}
                    styles={defaultStyles}
                    locale="pt-BR"
                    minDate={new Date()}
                  />
                </View>
              </LinearGradient>
            </View>
          )}
        </>
     
  );
};
