import { View, type ViewProps } from 'react-native'
import { mergeStyles, styled } from '../../theme/styles'

export interface BackgroundViewProps extends ViewProps {
  fill?: boolean
  alignCenter?: boolean
  justifyCenter?: boolean
}

const StyledBackgroundView = styled(View)((theme) => ({
  backgroundColor: theme.palette.background,
}))

export function BackgroundView({ fill, alignCenter, justifyCenter, style, children, ...props }: BackgroundViewProps) {
  return (
    <StyledBackgroundView
      {...props}
      style={mergeStyles(
        fill && { flex: 1 },
        alignCenter && { alignItems: 'center' },
        justifyCenter && { justifyContent: 'center' },
        style
      )}
    >
      {children}
    </StyledBackgroundView>
  )
}
