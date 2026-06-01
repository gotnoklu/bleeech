import { Children, type Component, type ForwardedRef, forwardRef, type ReactNode } from 'react'
import { Pressable, type PressableProps } from 'react-native'
import { createVariants, styled } from '../../theme/styles'
import type { PaletteColorToken } from '../../theme/types'
import { getThemeProperty } from '../../theme/utilities'
import { Text, type TextProps } from '../text'

export type ButtonVariant = 'default' | 'filled' | 'outlined' | 'ghost'
export type ButtonSizes = 'sm' | 'md' | 'lg' | 'icon' | 'icon-sm' | 'icon-md' | 'icon-lg'

export interface ButtonProps extends PressableProps {
  variant?: ButtonVariant
  color?: PaletteColorToken | (string & {})
  size?: ButtonSizes
  viewProps?: {
    text?: TextProps
  }
  fullWidth?: boolean
  children: ReactNode
  shape?: 'default' | 'rounded'
  disabled?: boolean
}

const _ButtonSizes: { [_ in ButtonSizes]: number } = {
  sm: 32,
  md: 40,
  lg: 48,
  icon: 40,
  'icon-sm': 32,
  'icon-md': 40,
  'icon-lg': 48,
}

const ButtonRadii: { [_ in ButtonSizes]: number } = {
  sm: 2.5,
  md: 3,
  lg: 4,
  icon: 3,
  'icon-sm': 2.5,
  'icon-md': 3,
  'icon-lg': 4,
}

const _getButtonSize = createVariants({
  styles: {
    sm: { width: 32, height: 32, maxWidth: 32, maxHeight: 32, borderRadius: 2.5 },
    md: { width: 40, height: 40, maxWidth: 40, maxHeight: 40, borderRadius: 3 },
    lg: { width: 48, height: 48, maxWidth: 48, maxHeight: 48, borderRadius: 4 },
    icon: { width: 40, height: 40, maxWidth: 40, maxHeight: 40, borderRadius: 3 },
    'icon-sm': { width: 32, height: 32, maxWidth: 32, maxHeight: 32, borderRadius: 2.5 },
    'icon-md': { width: 40, height: 40, maxWidth: 40, maxHeight: 40, borderRadius: 3 },
    'icon-lg': { width: 48, height: 48, maxWidth: 48, maxHeight: 48, borderRadius: 4 },
  },
  defaults: { variant: 'md' },
})

const TextSizes: { [_ in Exclude<ButtonSizes, `icon${string}`>]: number } = { sm: 14, md: 16, lg: 18 }

const StyledButton = styled(Pressable)<ButtonProps>(
  (theme, { variant = 'default', color = 'primary', size = 'md', fullWidth, disabled, shape = 'default' }) => {
    const buttonColor = getThemeProperty({ object: theme.palette, key: color, fallback: color })

    const buttonSizeStyles = createVariants({
      styles: {
        sm: { paddingHorizontal: theme.spacing(1.5), minWidth: 40, width: fullWidth ? '100%' : 'auto' },
        md: { paddingHorizontal: theme.spacing(3), minWidth: 40, width: fullWidth ? '100%' : 'auto' },
        lg: { paddingHorizontal: theme.spacing(4), minWidth: 40, width: fullWidth ? '100%' : 'auto' },
        icon: { width: 40, height: 40, maxWidth: 40, maxHeight: 40 },
        'icon-sm': { width: 32, height: 32, maxWidth: 32, maxHeight: 32 },
        'icon-md': { width: 40, height: 40, maxWidth: 40, maxHeight: 40 },
        'icon-lg': { width: 48, height: 48, maxWidth: 48, maxHeight: 48 },
      },
      defaults: {
        variant: 'md',
        styles: { gap: theme.spacing(1) },
      },
    })(size)

    const buttonRadiiStyles = createVariants({
      styles: {
        default: { borderRadius: theme.radius(ButtonRadii[size]) },
        rounded: { borderRadius: theme.radius(100) },
      },
      defaults: { variant: 'default' },
    })(shape)

    const buttonVariantStyles = createVariants({
      styles: {
        default: 'outlined',
        filled: { backgroundColor: disabled ? theme.palette.disabled : buttonColor, opacity: disabled ? 0.3 : 1 },
        outlined: {
          borderColor: disabled ? theme.palette.disabled : buttonColor,
          borderWidth: 1.2,
        },
        ghost: { backgroundColor: 'transparent' },
      },
      defaults: {
        variant: 'default',
        styles: {
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row',
          ...theme.typography.variants.md,
        },
      },
    })(variant)

    return { ...buttonSizeStyles, ...buttonRadiiStyles, ...buttonVariantStyles }
  }
)

const StyledText = styled(Text)<
  TextProps & Pick<ButtonProps, 'size' | 'disabled'> & { buttonVariant?: ButtonProps['variant'] }
>((theme, { buttonVariant = 'ghost', color = 'primary', size = 'md', disabled }) => {
  const buttonColor = getThemeProperty({ object: theme.palette, key: color, fallback: color })

  return createVariants({
    styles: {
      default: 'ghost',
      filled: {
        color: getThemeProperty({
          object: theme.palette,
          key: disabled ? 'text.disabled' : `${color}.foreground`,
          fallback: color,
        }),
      },
      outlined: { color: disabled ? theme.palette.disabled : buttonColor },
      ghost: 'outlined',
    },
    defaults: {
      variant: 'default',
      styles: {
        fontSize: TextSizes[size as keyof typeof TextSizes],
      },
    },
  })(buttonVariant)
})

export const Button = forwardRef(function Button(
  { viewProps, children, variant = 'filled', disabled, ...props }: ButtonProps,
  ref: ForwardedRef<Component<ButtonProps> | null>
) {
  return (
    <StyledButton ref={ref} variant={variant} disabled={disabled} {...props}>
      {Children.map(children, (child) => {
        if (typeof child === 'string' || typeof child === 'number') {
          return (
            <StyledText
              buttonVariant={variant}
              color={props.color}
              size={props.size}
              disabled={disabled}
              {...viewProps?.text}
            >
              {child}
            </StyledText>
          )
        }

        return child
      })}
    </StyledButton>
  )
})
