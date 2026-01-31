import { BorderBeam } from './border-beam'

//Because one wasn't enough
const DoubleBorderBeam = () => {
    return (
        <>
            <BorderBeam
                duration={6}
                size={100}
                className="
                    from-transparent via-red-500 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                "
            />

            <BorderBeam
                duration={6}
                delay={3}
                size={100}
                borderWidth={2}
                className="
                    from-transparent via-blue-500 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                "
            />
        </>
    )
}

export default DoubleBorderBeam