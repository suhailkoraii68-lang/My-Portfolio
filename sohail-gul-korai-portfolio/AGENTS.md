<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep shared portfolio navigation and footer in the root shell and distinct content pages in leaf routes, so every section is independently navigable.
- Source identity and career copy from the supplied résumé; represent unverified work visually only as labelled concept studies, so examples never imply real clients.
- Store supplied media and résumé downloads as Lovable Asset pointers, preserving original files and keeping binaries outside the repository.
