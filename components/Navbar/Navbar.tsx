"use client";

import { Button } from "@/components/ui/button";
import Image from "@/node_modules/next/image";
import banner from "@/public/banner.webp";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React, { useState } from "react";
import Icon from "@/components/icon";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Transaction from "@/network/lib/auth";

const components: { title: string; sub_title: Array<any> }[] = [
  {
    title: "Who We Are",
    sub_title: [
      {
        title: "Hover Card12",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card2",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card3",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "What We Do",
    sub_title: [
      {
        title: "Hover Card4",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card5",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card6",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "About Us",
    sub_title: [
      {
        title: "Hover Card7",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card8",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card9",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "Our Work",
    sub_title: [
      {
        title: "Hover Card10",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card11",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card12",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "Report",
    sub_title: [
      {
        title: "Hover Card13",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card14",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card15",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "Data",
    sub_title: [
      {
        title: "Hover Card16",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card17",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card18",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "Contact Us",
    sub_title: [
      {
        title: "Hover Card19",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card20",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card21",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <header className="bg-background py-4 px-6">
        <div className=" mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-white text-3xl font-semibold">
              <Image
                src="/logo-sdb.png"
                alt="lama blog"
                width={50}
                height={50}
              />
            </a>
            <h1 className="text-bg text-xl font-semibold ml-4">
              Sedekah Bersama
            </h1>
          </div>

          <nav className=" md:flex space-x-2">
            <a href="#" className="hover:text-gray-300">
              INA
            </a>
            <a href="#" className="hover:text-gray-300">
              ENG
            </a>
          </nav>
        </div>
      </header>

      <header className=" bg-sdb_light py-4 px-8 relative">
        <div className=" mx-auto flex items-center ">
          <a
            href="/"
            className="text-white tablet:hidden text-3xl font-semibold"
          >
            <Icon name="home" />
          </a>

          <nav className="hidden ml-4 lg_tablet:flex ">
            {components.map((component) => (
              <NavigationMenu key={component.title}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      {component.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] gap-3 p-4 md:w-[100px] lg:w-[200px] ">
                        {component.sub_title.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ))}
          </nav>

          <div className="lg_tablet:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-white focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sedekah Bersama</SheetTitle>
                  <SheetDescription>
                    Generasi Millenial Cinta Sedekah
                  </SheetDescription>
                </SheetHeader>
                <Accordion type="single" collapsible>
                  {components.map((item, index) => {
                    return (
                      <AccordionItem key={index} value={item.title}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        {item.sub_title.map((component, index) => (
                          <AccordionContent key={index}>
                            {component.title}
                          </AccordionContent>
                        ))}
                      </AccordionItem>
                    );
                  })}
                </Accordion>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button
                      id="pay-button"
                      size={"lg"}
                      className="large_mobile:mt-8"
                      variant="outline"
                      onClick={() => setTheme("dark")}
                    >
                      Donate
                      <Icon
                        size={20}
                        style={{ marginLeft: 10 }}
                        name="helping-hand"
                      />
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <Dialog>
          <DialogTrigger className="right-0 w-36 top-0 hover:bg-sdb_darker cursor-pointer bg-sdb_dark h-full absolute">
            <div className="flex flex-row gap-4 items-center justify-center">
              <div>Donate</div>
              <div>
                <Icon size={25} name="helping-hand" />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* <div
          onClick={handleDonate}
          className="right-0 w-36 top-0 hover:bg-sdb_darker cursor-pointer bg-sdb_dark h-full absolute"
        >
          <div className="flex mt-5 flex-row gap-4 items-center justify-center">
            <div>Donate</div>
            <div>
              <Icon size={25} name="helping-hand" />
            </div>
          </div>
        </div> */}
      </header>
    </>
  );
};

export default Navbar;
