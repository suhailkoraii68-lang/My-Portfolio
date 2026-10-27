import { createFileRoute } from '@tanstack/react-router';
import { EducationPage, portfolioHead } from '@/components/portfolio/content';
export const Route = createFileRoute('/education')({
 head: () => portfolioHead('Education', 'Education, information technology courses and professional development of Sohail Gul Korai.'),
 component: EducationPage,
});
