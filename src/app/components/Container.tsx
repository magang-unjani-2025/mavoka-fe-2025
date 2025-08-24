import { ElementType, HTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<
  {
    as?: ElementType;
    className?: string;
    /** true = tanpa max-width */
    fullWidth?: boolean;
  } & HTMLAttributes<HTMLElement>
>;

/**
 * Gutter kiri–kanan:
 * - base (mobile)   : 20px  -> px-5
 * - tablet (≥744px) : 40px  -> tablet:px-10
 * - desktop (≥1024) : 144px -> desktop:px-[144px]
 */
export function Container({
  as: Tag = "div",
  className = "",
  fullWidth = false,
  children,
  ...rest
}: Props) {
  return (
    <Tag
      className={[
        "mx-auto w-full",
        "px-5",                // 20
        "tablet:px-10",        // 40
        "desktop:px-[144px]",  // 144
        fullWidth ? "" : "max-w-content",
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
}
