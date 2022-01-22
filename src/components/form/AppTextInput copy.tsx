import React, {ChangeEvent} from 'react';
import {TextInput, StyleSheet, View, ViewStyle, Text} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

import colors from '../../constants/colors';
import defaultStyle from '../../constants/defaultStyle';

interface Props {
  width: number | undefined;
  style?: ViewStyle;
  placeholder: string;
  errors?: string | boolean | undefined;
  onBlur?: (e: any) => void;
  value?: string;
  keyboardType?: any;
  secureTextEntry?: boolean;
  onChangeText?: (e: string | ChangeEvent<any>) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
}

function AppTextInput({
  onBlur,
  placeholder,
  style,
  value,
  errors,
  width,
  keyboardType,
  onChangeText,
  autoCapitalize,
}: Props) {
  return (
    <>
      <View style={[styles.container, {width}, style]}>
        <TextInput
          onBlur={onBlur}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor={colors.lightGrey}
          style={[defaultStyle.text, styles.input]}
          placeholder={placeholder}
          value={value}
          autoCapitalize={autoCapitalize}
        />
      </View>
      {errors && <Text style={[styles.error, {width}]}>{errors}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    padding: WP(1),
    marginVertical: WP(5),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  error: {
    color: colors.red,
    fontSize: WP(4),
    marginTop: 5,
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    height: WP(10),
    fontSize: WP(4),
  },
});

export default AppTextInput;
