import React from 'react'

const Button = ({className="", size="default", children, ...props}) => {
    
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
    const sizeClasses = {
      sm: "px-3 sm:px-4 py-2 text-xs sm:text-sm",
      default: "px-4 sm:px-6 py-3 text-sm sm:text-base",
      lg: "px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg",
    };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`

    return (
      <button className={classes} {...props} >
        <span className="relative flex items-center justify-center gap-1.5 sm:gap-2">
          {children}
        </span>
      </button>
    );
}

export default Button