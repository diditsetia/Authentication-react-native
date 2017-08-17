import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

const Button = ({children}) => {
  const {buttomStyle,textStyle}= styles;
    return (
    <TouchableOpacity style={buttomStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

  const styles = {
    textStyle :  {
      alignSelf : 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight:'600',
      paddingTop: 10,
      paddingBottom:10,
    },
    buttomStyle : {
      flex: 1,
      alignSelf:'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor : '#007aff',
      marginLeft: 5,
      marginRight: 5,
      borderRadius:2,
    }
  };
export { Button };
