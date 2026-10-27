import { createFileRoute } from '@tanstack/react-router';
import { HomePage, portfolioHead } from '@/components/portfolio/content';
export const Route = createFileRoute('/')({
 head: () => portfolioHead('Creative portfolio', 'Graphic design, freelancing and purposeful digital creativity by Sohail Gul Korai in Moro, Sindh.'),
 component: HomePage,
});
