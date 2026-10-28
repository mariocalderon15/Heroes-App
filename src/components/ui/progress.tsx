import { Progress as ProgressPrimitive } from "@base-ui/react/progress"
import { cn } from "cn"

function Progress({
  className,
  activeColor = 'bg-primary',
  ...props
}: ProgressPrimitive.Root.Props & {activeColor?: string}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn( "flex flex-wrap gap-3", className)}
      {...props}
    >
        <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn( activeColor, "h-full transition-all", className)}
      {...props}
    />
    </ProgressPrimitive.Root>
  )
}

export {Progress}
