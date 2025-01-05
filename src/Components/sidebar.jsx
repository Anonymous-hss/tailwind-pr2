export function SidebarClass() {
  return (
    <div className="flex">
      <div className="transition-all delay-1000 bg-red-200  md:w-96 w-0 h-screen">
        Sidebar
      </div>
      <div className="bg-green-800 w-full">Content</div>
    </div>
  );
}
