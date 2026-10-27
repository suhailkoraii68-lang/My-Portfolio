import { createFileRoute } from '@tanstack/react-router';
import { ContactPage, portfolioHead } from '@/components/portfolio/content';
export const Route = createFileRoute('/contact')({
 head: () => portfolioHead('Contact', 'Contact Sohail Gul Korai in Moro, Sindh about graphic design and digital creative projects.'),
 component: ContactPage,
});
