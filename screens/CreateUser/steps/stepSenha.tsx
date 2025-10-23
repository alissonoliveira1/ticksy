import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Platform, StyleSheet, Text, TextInputProps, View } from "react-native";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

    const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    backgroundColor: '#f3f4f6',
    elevation: 1,
    borderRadius: 8,
    borderColor: '#00000030',
    textAlign: 'center',
    color: '#000', 
  },
  focusCell: {
    borderColor: '#000',
  },
});

const CELL_COUNT = 4;
const autoComplete = Platform.select<TextInputProps['autoComplete']>({
  android: 'sms-otp',
  default: 'one-time-code',
});
interface StepSenhaProps {
    email: string;
    code: string;
    setCode: React.Dispatch<React.SetStateAction<string>>;
}
export const StepSenha = ({email, code, setCode}:StepSenhaProps) => {
    const [value, setValue] = useState('');
    setCode(value);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
    return(
        <View>
            <View className="justify-center items-center">
               <MaterialIcons name="safety-check" color="#4f46e5" size={50} />
            </View>
            <View className="items-center mt-4">
                <Text className="text-xl font-bold">Codigo de segurança</Text>
            </View>
            <View className="items-center mt-1">
                <Text>Enviamos um código de segurança para o seu email: <Text className="font-semibold">{email}</Text></Text>
            </View>
            <View className="pb-16 pt-5">
               <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={autoComplete}
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused && <Cursor />)}
          </Text>
        )}
      />
            </View>
        </View>
    )
}