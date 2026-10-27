import { createFileRoute } from '@tanstack/react-router';
import { ExpertisePage, portfolioHead } from '@/components/portfolio/content';
export const Route = createFileRoute('/expertise')({
 head: () => portfolioHead('Expertise', 'Explore Sohail Gul Korai’s graphic design, AI-assisted creativity, office and communication skills.'),
 component: ExpertisePage,
});
