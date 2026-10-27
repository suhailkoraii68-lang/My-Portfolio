import { createFileRoute } from '@tanstack/react-router';
import { AboutPage, portfolioHead } from '@/components/portfolio/content';
export const Route = createFileRoute('/about')({
 head: () => portfolioHead('About', 'Meet Sohail Gul Korai, a graphic designer, freelancer and lifelong learner from Moro, Sindh.'),
 component: AboutPage,
});
