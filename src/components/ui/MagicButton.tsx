export const MagicButton = ({
  title,
  icon,
  className,
  onClick,
  position,
}: {
  title: string
  icon?: React.ReactNode
  className?: string
  onClick?: () => void
  position?: string
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-full p-[1px] focus:outline-none cursor-pointer z-50"
      onClick={onClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 hover:bg-slate-900 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${className}`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  )
}