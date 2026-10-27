import { Link } from '@tanstack/react-router';
import { useState, type ReactNode } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const navigation = [{to:'/',label:'Home'},{to:'/about',label:'About'},{to:'/expertise',label:'Expertise'},{to:'/projects',label:'Projects'},{to:'/experience',label:'Experience'},{to:'/education',label:'Education'},{to:'/contact',label:'Contact'}] as const;
export function PortfolioShell({children}:{children:ReactNode}) {
 const [open,setOpen]=useState(false);
 return <><header className="site-header"><Link to="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-initials">SGK<span className="sr-only">Sohail Gul Korai</span></span><span className="brand-name">Sohail Gul Korai<span className="text-primary">.</span></span></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(n=><Link key={n.to} to={n.to} activeOptions={{exact:true}} className="nav-link">{n.label}</Link>)}</nav><Button variant="outline" asChild className="header-contact"><Link to="/contact">Let's talk <ArrowUpRight/></Link></Button><Button variant="ghost" size="icon" className="mobile-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></header>{open&&<nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(n=><Link key={n.to} to={n.to} className="nav-link" onClick={()=>setOpen(false)}>{n.label}</Link>)}</nav>}<main>{children}</main><footer className="footer"><span>© {new Date().getFullYear()} Sohail Gul Korai</span><span>Creative thinking. Practical purpose.</span><span>Moro, Sindh, Pakistan</span></footer></>;
}
