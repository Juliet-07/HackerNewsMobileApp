import React from 'react';
import {Input} from 'react-native-elements';
import {View} from 'react-native';
import propTypes from 'prop-types';
import {useField} from 'formik';
import {styles} from './styles';

// INPUT WRAPPED WITH FORMIK
export const SearchBar = (props) => {
  const {
    name,
    value,
    label,
    inputContainerStyles,
    containerStyles,
    leftLabel,
    keyboardType,
    rightIcon,
    handleChange,
    ...otherProps
  } = props;
  const [useField, meta, help] = useField(props);
  return (
    <React.Fragment>
      <View style={styles.main}>
        <Input
          name={name}
          id={[label, name].join('-')}
          value={value[name]}
          onChange={handleChange}
          placeholder={leftLabel ? null : label}
          keyboardType={keyboardType}
          inputContainerStyle={{...styles.inputContainer}}
          containerStyle={{...styles.container}}
          rightIcon={rightIcon}
          {...field[name]}
          {...props}
          {...otherProps}
        />
      </View>
    </React.Fragment>
  );
};

SearchBar.propTypes = {
    value: propTypes.string.isRequired,
    label: propTypes.string,
    name: propTypes.string.isRequired,
    keyboardType: propTypes.string,
    // errorMsg: propTypes.string,
    containerStyles: propTypes.object,
    inputContainerStyles: propTypes.object,
    // leftLabel: propTypes.bool,
  };