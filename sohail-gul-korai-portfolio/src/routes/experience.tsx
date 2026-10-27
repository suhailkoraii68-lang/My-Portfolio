import { createFileRoute } from '@tanstack/react-router';
import { ExperiencePage, portfolioHead } from '@/components/portfolio/content';
export const Route = createFileRoute('/experience')({
 head: () => portfolioHead('Experience', 'Sohail Gul Korai’s professional experience in teaching, audit assistance and health coordination.'),
 component: ExperiencePage,
});
