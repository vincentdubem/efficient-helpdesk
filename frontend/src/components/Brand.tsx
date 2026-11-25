type BrandProps = {
  compact?: boolean;
  light?: boolean;
};

export function Brand({ compact = false, light = false }: BrandProps) {
  return (
    <a
      href="#/home"
      className={`brand ${compact ? 'brand--compact' : ''} ${light ? 'brand--light' : ''}`}
      aria-label="Efficient Helpdesk — home"
    >
      <svg className="brand__mark" viewBox="0 0 48 59" fill="none" aria-hidden="true">
        <path
          d="M27 2C24 14 12 20 10 33c-2 13 5 23 17 23 11 0 19-9 19-20 0-13-7-19-14-28 1 11-3 16-8 21 0-10 0-17 3-27Z"
          fill="#FF8500"
        />
        <path
          d="M22 26c-6 8-13 13-13 21 0 8 6 13 14 13 8 0 14-6 14-14 0-7-4-13-7-17-1 9-5 12-9 13-1-5-1-10 1-16Z"
          fill="#0B2545"
        />
        <path d="M21 47c-2 4-4 7-4 10 0 3 3 4 6 4 4 0 6-2 6-5 0-3-2-7-5-10-1 4-2 4-3 1Z" fill="#FFFFFF" />
      </svg>
      <span className="brand__name">
        <span className="brand__efficient">Efficient</span>{' '}
        <span className="brand__helpdesk">Helpdesk</span>
      </span>
    </a>
  );
}
