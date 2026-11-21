// Slow-drifting color fields behind the whole page, in the site's own palette.
export function Backdrop() {
  return (
    <div aria-hidden="true" className="backdrop-art">
      <span className="blob blob-1" />
      <span className="blob blob-2" />
      <span className="blob blob-3" />
    </div>
  );
}
