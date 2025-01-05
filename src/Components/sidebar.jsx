export function SidebarClass() {
  return (
    <div className="flex">
      <div className="transition-all ease-in-out delay-2000 duration-1000 bg-red-200  md:w-96 w-0 h-screen">
        Sidebar
      </div>
      <div className="bg-green-800 w-full">Content</div>
    </div>
  );
}
