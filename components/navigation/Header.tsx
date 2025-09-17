"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Database, Users, Laptop, Home, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/components/ui/logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {/* Home */}
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Data Annotation */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Database className="mr-2 h-4 w-4" />
                  Data Annotation
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink asChild>
                      <Link href="/data-annotation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Image Annotation</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          High-quality image labeling for computer vision projects
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/data-annotation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Text Classification</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Accurate text labeling for NLP and machine learning
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/data-annotation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Video Annotation</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Frame-by-frame video analysis and object tracking
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Recruitment */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Users className="mr-2 h-4 w-4" />
                  Recruitment
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink asChild>
                      <Link href="/recruitment" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Executive Search</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          C-level and senior leadership talent acquisition
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/recruitment" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Technical Recruitment</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Software engineers, data scientists, and tech professionals
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/recruitment" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Industry Specialists</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Healthcare, finance, and emerging technology sectors
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* IT Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Laptop className="mr-2 h-4 w-4" />
                  IT Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink asChild>
                      <Link href="/it-services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Software Development</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Custom web applications and mobile solutions
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/it-services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Cloud Solutions</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          AWS, Azure, and Google Cloud migration services
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/it-services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">System Integration</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Seamless integration of existing and new systems
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link
                href="/"
                className="flex items-center px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
              
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-foreground mb-2 flex items-center">
                  <Database className="mr-2 h-4 w-4" />
                  Data Annotation
                </div>
                <div className="ml-4 space-y-1">
                  <Link href="/data-annotation" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                    Image Annotation
                  </Link>
                  <Link href="/data-annotation" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                    Text Classification
                  </Link>
                  <Link href="/data-annotation" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                    Video Annotation
                  </Link>
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-sm font-medium text-foreground mb-2 flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Recruitment
                </div>
                <div className="ml-4 space-y-1">
                  <Link href="/recruitment" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                    Executive Search
                  </Link>
                  <Link href="/recruitment" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                    Technical Recruitment
                  </Link>
                  <Link href="/recruitment" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                    Industry Specialists
                  </Link>
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-sm font-medium text-foreground mb-2 flex items-center">
                  <Laptop className="mr-2 h-4 w-4" />
                  IT Services
                </div>
                <div className="ml-4 space-y-1">
                  <Link href="/it-services" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                    Software Development
                  </Link>
                  <Link href="/it-services" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                    Cloud Solutions
                  </Link>
                  <Link href="/it-services" className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                    System Integration
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="flex items-center px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Link>
              
              <div className="px-3 pt-2">
                <Link
                  href="/contact"
                  className="block w-full rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}