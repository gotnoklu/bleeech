import { Children, type ReactNode, useState } from 'react'
import { type GestureResponderEvent, Pressable, type PressableProps } from 'react-native'
import { createStyles, createVariants, styled } from '../../theme/styles'
import type { PaletteColorToken } from '../../theme/types'
import { alpha, getThemeProperty } from '../../theme/utilities'
import { Text, type TextProps } from '../text'

interface BaseChipProps extends PressableProps {
  variant?: 'filled' | 'outlined'
  shape?: 'default' | 'rounded'
  checked?: boolean
  color?: PaletteColorToken | (string & {})
  size?: 'sm' | 'md' | 'lg'
  viewProps?: {
    label?: TextProps
  }
  children?: ReactNode
  disabled?: boolean
  onChecked?(event: GestureResponderEvent): void
}

export interface ChipProps extends BaseChipProps {
  defaultChecked?: boolean
}

const StyledBaseChip = styled(Pressable)<BaseChipProps>(
  (theme, { variant = 'filled', checked, color = 'border', size = 'md', disabled, shape = 'default' }) => {
    const chipColor = getThemeProperty({ object: theme.palette, key: color, fallback: color })
    const styles = createVariants({
      styles: {
        default: 'filled',
        filled: {
          backgroundColor: alpha(checked ? theme.palette.primary.main : (chipColor ?? theme.palette.border), 0.1),
        },
        outlined: {
          borderColor: checked ? theme.palette.primary.main : disabled ? theme.palette.disabled : chipColor,
          borderWidth: 1,
        },
      },
      defaults: {
        variant: 'default',
        styles: {
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row',
          maxWidth: 'auto',
          borderRadius: theme.radius(shape === 'rounded' ? 100 : 2),
          gap: theme.spacing(1),
          paddingVertical: theme.spacing(0.5),
          paddingHorizontal: size === 'sm' ? theme.spacing(1) : size === 'md' ? theme.spacing(1) : theme.spacing(2),
          ...theme.typography.variants.md,
        },
      },
    })(variant)

    return styles
  }
)

const useLabelStyles = createStyles(
  (theme, { checked, size = 'md', disabled }: Pick<ChipProps, 'checked' | 'color' | 'size' | 'disabled'>) => {
    const styles = createVariants({
      styles: { sm: { fontSize: 11 }, md: { fontSize: 14 }, lg: { fontSize: 16 } },
      defaults: {
        variant: 'md',
        styles: {
          color: checked
            ? theme.palette.primary.main
            : disabled
              ? theme.palette.disabled
              : theme.palette.text.secondary,
        },
      },
    })(size)

    return styles
  }
)

export function BaseChip({ variant, checked, viewProps, children, disabled, onChecked, ...props }: ChipProps) {
  const labelStyles = useLabelStyles({
    color: props.color,
    size: props.size,
    checked,
    disabled,
  })

  return (
    <StyledBaseChip
      variant={variant}
      checked={checked}
      disabled={disabled}
      android_ripple={{
        borderless: false,
        foreground: true,
      }}
      onPress={onChecked}
      {...props}
    >
      {Children.map(children, (child) => {
        if (typeof child === 'string' || typeof child === 'number') {
          return (
            <Text {...viewProps?.label} style={[labelStyles, viewProps?.label?.style]}>
              {child}
            </Text>
          )
        }

        return child
      })}
    </StyledBaseChip>
  )
}

const ControlledChip = BaseChip

function UncontrolledChip({ checked: defaultChecked, ...props }: ChipProps) {
  const [checked, setChecked] = useState(defaultChecked)

  function toggleChecked() {
    setChecked(!checked)
  }

  return <BaseChip {...props} checked={checked} onChecked={toggleChecked} />
}

export function Chip({ checked, defaultChecked, ...props }: ChipProps) {
  if (typeof checked === 'boolean') return <ControlledChip checked={checked} {...props} />
  return <UncontrolledChip checked={defaultChecked} {...props} />
}
