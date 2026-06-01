import * as React from 'react'
import { Easing, TextInput, Animated, View, StyleSheet } from 'react-native'
import Svg, { G, Circle } from 'react-native-svg'

// const AnimatedRect = Animated.createAnimatedComponent(Rect);
// const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

export interface CircularProgressProps {
  percentage?: number
  radius?: number
  strokeWidth?: number
  duration?: number
  color?: string
  delay?: number
  textColor?: string
}

export function CircularProgress({
  percentage = 75,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = 'tomato',
  delay = 0,
  textColor,
}: CircularProgressProps) {
  const animated = React.useRef(new Animated.Value(0)).current
  const rectRef = React.useRef<Circle | null>(null)
  const inputRef = React.useRef<TextInput | null>(null)
  const circumference = 2 * Math.PI * radius

  const animation = (toValue: number) => {
    return Animated.timing(animated, {
      delay,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      // animation(toValue === 0 ? percentage : 0);
    })
  }

  React.useEffect(() => {
    animation(percentage)
    animated.addListener((v) => {
      // console.log(v.value)
      const strokeDashoffset = circumference - (circumference * v.value) / 100
      // console.log(v.value)
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: Math.round(v.value).toString(),
        })
      }
      if (rectRef?.current) {
        rectRef.current.setNativeProps({
          strokeDashoffset,
        })
      }
    })

    return () => {
      animated.removeAllListeners()
    }
  })

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      {/* @ts-ignore */}
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${(radius + strokeWidth) * 2} ${(radius + strokeWidth) * 2}`}
      >
        {/* @ts-ignore */}
        <G rotation="-90" origin={`${radius + strokeWidth}, ${radius + strokeWidth}`}>
          {/* @ts-ignore */}
          <Circle
            ref={rectRef}
            cx="50%"
            cy="50%"
            r={radius}
            strokeDashoffset={circumference}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
          />
          {/* @ts-ignore */}
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".2"
          />
        </G>
      </Svg>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[StyleSheet.absoluteFillObject, { fontSize: radius / 2, color: textColor ?? color }, styles.text]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: { fontWeight: '900', textAlign: 'center' },
})
