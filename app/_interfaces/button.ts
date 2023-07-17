// export interface ButtonProps
//   extends React.HtmlHTMLAttributes<HTMLButtonElement> {
//   size?: "sm" | "md" | "lg";
//   children: React.ReactNode;
// }

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "xs" | "sm" | "md" | "lg";
  bg?: string;
  text?: string;
  customclass?: string;
  isselectable?: boolean;
  selected?: boolean;
  children: React.ReactNode;
}
