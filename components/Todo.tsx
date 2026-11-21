export function Todo({ children }: { children: React.ReactNode }) {
  return <span className="todo">[TODO: {children}]</span>;
}
