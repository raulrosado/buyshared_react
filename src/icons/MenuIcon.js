export const MenuIcon = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    label,
    ...props
  }) => {
    if (filled) {
      return (
        <svg
          width={size || width || 24}
          height={size || height || 24}
          viewBox="0 0 24 24"
          {...props}
        >
          <g fill={fill}>
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
          </g>
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
      </svg>
    );
  };



