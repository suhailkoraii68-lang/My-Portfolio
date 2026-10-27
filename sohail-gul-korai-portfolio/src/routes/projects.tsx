import { createFileRoute } from '@tanstack/react-router';
import { ProjectsPage, portfolioHead } from '@/components/portfolio/content';
export const Route = createFileRoute('/projects')({
 head: () => portfolioHead('Creative work', 'Graphic design disciplines and creative concept studies by Sohail Gul Korai.'),
 component: ProjectsPage,
});
