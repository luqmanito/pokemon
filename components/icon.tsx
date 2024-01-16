import { LucideProps } from "@/node_modules/lucide-react/dist/lucide-react";
import dynamic from "@/node_modules/next/dynamic";
import dynamicIconImports from "@/node_modules/lucide-react/dynamicIconImports";

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
};

export default Icon;
