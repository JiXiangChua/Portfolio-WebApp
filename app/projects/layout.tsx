// This is the common layout used for all projects

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div>{children}</div>
    </div>
  );
}
