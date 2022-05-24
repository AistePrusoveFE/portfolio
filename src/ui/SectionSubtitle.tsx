interface SubTitleProps {
    text: string
}

const SectionSubtitle = ({ text }: SubTitleProps) => {
    return <h2 className="font-bold text-center mb-4">{text}</h2>
}

export default SectionSubtitle