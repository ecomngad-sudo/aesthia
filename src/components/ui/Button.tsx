import {
  forwardRef,
  cloneElement,
  isValidElement,
  type ReactNode,
  type ReactElement,
} from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type Variant = 'gold' | 'ink' | 'glass' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  icon?: boolean;
  asChild?: boolean;
}

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight min-h-[44px] ring-focus transition-all duration-300 will-change-transform';

const variants: Record<Variant, string> = {
  gold: 'btn-gold hover:shadow-[0_12px_36px_rgba(212,175,55,0.38)] hover:-translate-y-0.5',
  ink: 'btn-ink hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(17,17,17,0.28)]',
  glass:
    'glass text-ink hover:bg-white/80 hover:-translate-y-0.5 hover:shadow-luxury',
  ghost:
    'text-ink/70 hover:text-ink hover:bg-ink/5',
};

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'gold',
      size = 'md',
      className = '',
      children,
      icon = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    const inner = (
      <>
        {asChild && isValidElement(children)
          ? (children as ReactElement).props.children
          : children}
        {icon && (
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.25}
          />
        )}
      </>
    );

    if (asChild && isValidElement(children)) {
      const child = children as ReactElement;
      return cloneElement(child, {
        ...props,
        className: [classes, child.props.className].filter(Boolean).join(' '),
        ref,
        children: (
          <span className="relative z-10 flex items-center gap-2">{inner}</span>
        ),
      });
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={classes}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{inner}</span>
      </motion.button>
    );
  }
);
Button.displayName = 'Button';

interface PillProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function Pill({ children, className = '', icon }: PillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink/70 backdrop-blur ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}

export function SectionLabel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-500">
        {children}
      </span>
    </div>
  );
}

interface SectionHeadingProps {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignClass} ${className}`}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className="text-display-md font-semibold text-ink text-balance">{title}</h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-ink/60 text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
