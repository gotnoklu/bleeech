import {
  type Component,
  type ComponentProps,
  type ComponentType,
  createElement,
  type ForwardRefExoticComponent,
  forwardRef,
  type PropsWithChildren,
  type PropsWithoutRef,
  type RefAttributes,
} from 'react'
import type { PressableProps, StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import { merge } from '../utilities'
import { useTheme } from './context'
import type { Theme } from './types'
import { isObject } from './utilities'

export function styled<
  const TElement extends
    | ComponentType<PropsWithChildren<{ style?: StyleProp<ViewStyle> }>>
    | ComponentType<PropsWithChildren<{ style?: StyleProp<TextStyle> }>>
    | ComponentType<PropsWithChildren<{ style?: any }>>
    | ForwardRefExoticComponent<PressableProps & RefAttributes<View>>,
>(
  el: TElement,
  config?: {
    omitProps?: Array<string> | ((prop: string) => boolean)
    allowOnlyProps?: Array<string> | ((prop: string) => boolean)
  }
) {
  return function createStyledComponent<TProps extends ComponentProps<TElement> | Record<string, any>>(
    styles:
      | Exclude<TProps['style'], (...args: any[]) => any>
      | ((theme: Theme, props: TProps) => Exclude<TProps['style'], (...args: any[]) => any>)
  ) {
    return forwardRef<TElement, TProps>(function Component({ style, ...props }, ref) {
      const theme = useTheme()
      const componentStyles = typeof styles === 'function' ? styles(theme, props as TProps) : styles
      let componentProps = Object.assign({}, props)

      // Create component with only allowed props when supplied
      if (Array.isArray(config?.allowOnlyProps) && config.allowOnlyProps.length > 0) {
        const allowedProps = {} as typeof componentProps
        const propsToAllow = config.allowOnlyProps
        let index = 0
        let prop
        for (index; index < propsToAllow.length; index++) {
          prop = propsToAllow[index] as keyof typeof componentProps
          if (prop in componentProps) {
            allowedProps[prop] = componentProps[prop]
          }
        }
        componentProps = allowedProps
      } else if (typeof config?.allowOnlyProps === 'function') {
        const allowedProps = {} as typeof componentProps
        let prop: keyof typeof componentProps
        for (prop in componentProps) {
          if (config.allowOnlyProps(prop)) {
            allowedProps[prop] = componentProps[prop]
          }
        }
        componentProps = allowedProps
      } else {
        // Create component without omitted props when supplied
        if (Array.isArray(config?.omitProps) && config.omitProps.length > 0) {
          const propsToOmit = config.omitProps
          let index = 0
          let prop
          for (index; index < propsToOmit.length; index++) {
            prop = propsToOmit[index]
            if (prop in componentProps) {
              Reflect.deleteProperty(componentProps, prop)
            }
          }
        } else if (typeof config?.omitProps === 'function') {
          let prop
          for (prop in componentProps) {
            if (config.omitProps(prop)) {
              Reflect.deleteProperty(componentProps, prop)
            }
          }
        }
      }

      if (typeof style === 'function') {
        return createElement(
          el as any,
          {
            style: (...args: any[]) => {
              return merge(componentStyles, style(...args))
            },
            ref,
            ...componentProps,
          } as any
        )
      }

      return createElement(el as any, { style: [componentStyles, style], ref, ...componentProps } as any)
    }) as ForwardRefExoticComponent<PropsWithoutRef<TProps> & RefAttributes<Component<TProps>>>
  }
}

type StyleObject = Record<string, ViewStyle | TextStyle>

export function createStylesheet<TProps extends Record<string, any> | undefined, const TStyles extends StyleObject>(
  styles: TStyles | ((theme: Theme, props: TProps) => TStyles)
) {
  return function useStyles(props?: TProps): TStyles {
    const theme = useTheme()
    if (typeof styles === 'function') {
      return styles(theme, props as TProps) as TStyles
    }
    return styles as TStyles
  }
}

export function createStyles<
  TProps extends Record<string, any> | undefined,
  const TStyles extends ViewStyle | TextStyle,
>(styles: TStyles | ((theme: Theme, props: TProps) => TStyles)) {
  return function useStyles(props?: TProps): TStyles {
    const theme = useTheme()
    if (typeof styles === 'function') {
      return styles(theme, props as TProps) as TStyles
    }
    return styles as TStyles
  }
}

export function createVariants<Styles extends { [key: string]: string | ViewStyle | TextStyle }>(variants: {
  styles: Styles
  defaults: { variant: keyof Styles; styles?: ViewStyle | TextStyle }
}) {
  const { styles, defaults } = variants
  return function selectVariant(variant?: keyof Styles) {
    if (!variant) {
      if (defaults?.variant) {
        const selectedStyles = styles[defaults.variant]
        if (typeof selectedStyles === 'string') {
          return styles[selectedStyles] as unknown as Exclude<Styles[keyof Styles], string>
        }

        return selectedStyles as Exclude<Styles[keyof Styles], string>
      }
      return defaults?.styles ?? {}
    }

    if (variant in styles) {
      let selectedStyles = styles[variant]

      if (typeof selectedStyles === 'string') {
        selectedStyles = styles[selectedStyles]

        if (selectedStyles) {
          if (defaults?.styles) {
            return merge(defaults.styles, selectedStyles as ViewStyle | TextStyle) as Exclude<
              Styles[keyof Styles],
              string
            >
          }

          return selectedStyles as Exclude<Styles[keyof Styles], string>
        }

        return defaults?.styles ?? {}
      }

      if (defaults?.styles) {
        return merge(defaults.styles, selectedStyles as ViewStyle | TextStyle) as Exclude<Styles[keyof Styles], string>
      }

      return selectedStyles as Exclude<Styles[keyof Styles], string>
    }

    return defaults?.styles ?? {}
  }
}

export function mergeStyles<Styles extends Array<StyleProp<ViewStyle> | StyleProp<TextStyle>>>(
  ...styles: Styles
): Styles[number] {
  let result = {} as Extract<StyleProp<ViewStyle> | StyleProp<TextStyle>, Record<PropertyKey, any>>

  for (const style of styles) {
    if (isObject(style)) result = merge(result, style)
  }

  return result
}
