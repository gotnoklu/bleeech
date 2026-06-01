import { type ForwardedRef, forwardRef } from 'react'
import { Pressable, type PressableProps, type View } from 'react-native'
import { createVariants, mergeStyles, styled } from '../../theme/styles'
import { Separator } from '../separator'

export interface ListItemButtonProps extends PressableProps {
  size?: 'sm' | 'md' | 'lg'
  separator?: boolean
  disablePadding?: boolean
  disableMinHeight?: boolean
}

export const StyledListItemButton = styled(Pressable)<ListItemButtonProps>(
  (theme, { size = 'md', disablePadding, disableMinHeight }) => {
    const styles = createVariants({
      styles: { sm: { minHeight: 40 }, md: { minHeight: 48 }, lg: { minHeight: 56 } },
      defaults: {
        variant: 'md',
        styles: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          gap: theme.spacing(2),
          borderRadius: theme.radius(2),
          paddingHorizontal: disablePadding ? 0 : theme.spacing(2),
          minHeight: 'auto',
        },
      },
    })(size)

    return mergeStyles(disableMinHeight && { minHeight: 'auto' }, styles)
  }
)

export const ListItemButton = forwardRef(function ListItemButton(
  { separator, children, ...props }: ListItemButtonProps,
  ref: ForwardedRef<View | null>
) {
  const element = (
    <StyledListItemButton ref={ref} {...props}>
      {children}
    </StyledListItemButton>
  )

  if (separator === true) {
    return (
      <>
        {element}
        <Separator />
      </>
    )
  }

  return element
})
