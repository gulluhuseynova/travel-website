import { useEffect } from 'react'

const Scroll = () => {
    useEffect(() => {
        const handleSmoothScroll = (e) => {
            e.preventDefault()
            const targetId = e.target.getAttribute('href')
            const targetElement = document.querySelector(targetId)

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                })
            }
        }

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', handleSmoothScroll)
        })

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.removeEventListener('click', handleSmoothScroll)
            })
        }
    }, [])

    return null
}

export default Scroll
