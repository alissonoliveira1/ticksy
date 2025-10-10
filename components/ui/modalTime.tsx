import RNDateTimePicker from "@react-native-community/datetimepicker";
import React from "react";

interface ModalTimeProps {
  visible: boolean;
  value: Date;
  onClose: () => void;
  onChange: (date: Date) => void;
}

export const ModalTime = ({ visible, value, onClose, onChange }: ModalTimeProps) => {
  if (!visible) return null;

  return (
    
      <RNDateTimePicker
        value={value || new Date()}
        mode="time"  
        placeholderText=""
        className="ws"     // ✅ modo hora
        is24Hour={true} 
        style={{backgroundColor:'#6366f1'}}  
        fullscreen// 24h
        display="spinner"    // visual tipo roda
        onChange={(event, date) => {
          onClose();
          if (date) onChange(date);
        }}
      />
   
  );
};
