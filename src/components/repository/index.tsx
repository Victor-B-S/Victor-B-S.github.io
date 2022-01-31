interface Props {
    repositoryName : string;
    link : string;
}

const Repository = ({ repositoryName, link } : Props) => {
    return (
        <div>
            <a href={link} target= "_blank" rel= "noreferrer">{repositoryName}</a>
        </div>
    )
}

export default Repository