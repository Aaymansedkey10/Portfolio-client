"use client"
const ToTopButton = () => {
    const toTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <button
            onClick={() => toTop()}
            className="fixed bottom-3 right-3 bg-primary text-white px-5 py-2 rounded-full cursor-pointer">
            t
        </button>
    )
}

export default ToTopButton