import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4">
            <nav className="flex items-center justify-between w-full max-w-[1000px] px-3 py-2.5 bg-background/90 backdrop-blur-md rounded-2xl shadow-lg border border-border/50">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 pl-3">
                    {/* Logo icon (green bars) */}
                    <div className="flex items-end gap-[3px] h-[20px] pb-px">
                        <div className="w-[4px] h-[10px] bg-primary rounded-[1px]" />
                        <div className="w-[4px] h-[15px] bg-primary rounded-[1px]" />
                        <div className="w-[4px] h-[20px] bg-primary rounded-[1px]" />
                    </div>
                    <span className="text-foreground font-semibold text-[17px] tracking-tight">SalaryGuide</span>
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-7">
                    <Link to="/companies" className="text-muted-foreground hover:text-foreground transition-colors text-[14px] font-medium">Marketing</Link>
                    <Link to="/salaries" className="text-muted-foreground hover:text-foreground transition-colors text-[14px] font-medium">Technology</Link>
                    <Link to="/jobs" className="text-muted-foreground hover:text-foreground transition-colors text-[14px] font-medium">E-Commerce</Link>
                    <Link to="/tools" className="text-muted-foreground hover:text-foreground transition-colors text-[14px] font-medium">Tax-filing</Link>
                    <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-[14px] font-medium">About</Link>


                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-3 pr-1">
                    <GetStartedModal>
                        <button className="px-5 py-2 text-[14px] font-medium text-primary-foreground bg-primary hover:opacity-90 border border-transparent rounded-[8px] transition-all">
                            Get Started
                        </button>
                    </GetStartedModal>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Drawer */}
            {isMenuOpen && (
                <div className="md:hidden w-full max-w-[1000px] mt-4 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-5 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4 fade-in-20 duration-200">
                    <div className="flex flex-col gap-1">
                        <Link to="/companies" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground text-[16px] font-medium py-3 px-2 border-b border-border/50">Marketing</Link>
                        <Link to="/salaries" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground text-[16px] font-medium py-3 px-2 border-b border-border/50">Technology</Link>
                        <Link to="/jobs" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground text-[16px] font-medium py-3 px-2 border-b border-border/50">E-Commerce</Link>
                        <Link to="/tools" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground text-[16px] font-medium py-3 px-2 border-b border-border/50">Tax-filing</Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground text-[16px] font-medium py-3 px-2 border-b border-border/50">About</Link>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                        <GetStartedModal>
                            <button className="w-full text-center px-5 py-3 text-[15px] font-medium text-primary-foreground bg-primary hover:opacity-90 border border-transparent rounded-[8px] transition-all">
                                Get Started
                            </button>
                        </GetStartedModal>
                    </div>
                </div>
            )}
        </div>
    );
}

// ==================
// GET STARTED MODAL
// ==================

export function GetStartedModal({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children || <Button>Get Started</Button>}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Get Started</DialogTitle>
                    <DialogDescription>
                        Select a service and fill out the details to get started.
                    </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="marketing" className="w-full mt-2">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="marketing">Marketing</TabsTrigger>
                        <TabsTrigger value="technology">Technology</TabsTrigger>
                        <TabsTrigger value="ecommerce">E-Commerce</TabsTrigger>
                        <TabsTrigger value="tax">Tax Filing</TabsTrigger>
                    </TabsList>

                    <div className="mt-4 min-h-[220px]">
                        <TabsContent value="marketing" className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="marketing-company">Company Website</Label>
                                <Input id="marketing-company" placeholder="https://example.com" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="marketing-budget">Monthly Budget ($)</Label>
                                <Input id="marketing-budget" type="number" placeholder="5000" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="marketing-goal">Primary Goal</Label>
                                <Input id="marketing-goal" placeholder="Increase brand awareness" />
                            </div>
                            <Button className="w-full mt-2">Submit Marketing Request</Button>
                        </TabsContent>

                        <TabsContent value="technology" className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="tech-stack">Required Stack / Tech Need</Label>
                                <Input id="tech-stack" placeholder="React, Node.js, AWS" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="tech-stage">Product Stage</Label>
                                <Input id="tech-stage" placeholder="MVP / Scaling / Established" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="tech-email">Work Email</Label>
                                <Input id="tech-email" type="email" placeholder="you@company.com" />
                            </div>
                            <Button className="w-full mt-2">Submit Technology Request</Button>
                        </TabsContent>

                        <TabsContent value="ecommerce" className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="ecom-store">Store URL</Label>
                                <Input id="ecom-store" placeholder="https://store.example.com" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="ecom-revenue">Average Monthly Revenue</Label>
                                <Input id="ecom-revenue" placeholder="e.g. $10k - $50k" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="ecom-challenge">Biggest Challenge</Label>
                                <Input id="ecom-challenge" placeholder="Cart abandonment, conversion rate..." />
                            </div>
                            <Button className="w-full mt-2">Submit E-Commerce Request</Button>
                        </TabsContent>

                        <TabsContent value="tax" className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="tax-entity">Business Entity Type</Label>
                                <Input id="tax-entity" placeholder="LLC, C-Corp, Sole Proprietorship" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="tax-revenue">Annual Revenue</Label>
                                <Input id="tax-revenue" placeholder="Annual gross revenue" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="tax-location">Primary Operating Location</Label>
                                <Input id="tax-location" placeholder="State / Country" />
                            </div>
                            <Button className="w-full mt-2">Submit Tax Filing Request</Button>
                        </TabsContent>
                    </div>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}