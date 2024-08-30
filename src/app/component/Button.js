const Button = ({ href, onClick, children, className, variant = 'white', size = 'small', ...porps}) => {
    const baseStyle = "move-in-bottom uppercase inline-block transition-all hover:-translate-y-1 hover:shadow-black hover:drop-shadow-xl active:translate-y-0.5"

    const variants = {
        white: "bg-white text-slate-500 rounded-full",
        green: "bg-green-500 text-white rounded-full",
        text: "text-green-600 border-b-2 border-green-500 hover:text-white hover:bg-green-500"
    }

    const sizes = {
        small: "py-2 px-4 text-sm",
        medium: "py-4 px-8 text-base",
        large: "py-6 px-12 text-lg",
        text: "py-4 px-1 text-sm"
    }

    const classNames = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

    return href ? (
        <a href = {href} className = {classNames} {...porps}>
            {children}
        </a>
    ) : (
        <button onClick={onClick} className={classNames} {...porps}>
            {children}
        </button>
    )
}

export default Button