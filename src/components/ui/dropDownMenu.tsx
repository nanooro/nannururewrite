import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@ui/navigation-menu";

export default function DropdownMenu({ className }) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="flex flex-col">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-3 py-2 font-medium rounded-md hover:bg-gray-100">
            Menu
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col p-2 gap-1 bg-white border shadow rounded-md w-48">
            <NavigationMenuLink
              href="/"
              className="hover:bg-gray-100 px-2 py-1 rounded-md transition"
            >
              Home
            </NavigationMenuLink>
            <NavigationMenuLink
              href="/articleList"
              className="hover:bg-gray-100 px-2 py-1 rounded-md transition"
            >
              Articles
            </NavigationMenuLink>
            <NavigationMenuLink
              href="/about"
              className="hover:bg-gray-100 px-2 py-1 rounded-md transition"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuContent>{" "}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
