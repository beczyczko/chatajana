import ReactMarkdown from 'react-markdown';

const AdditionalInfo = ({ additionalInfo }) => {
    return (
        <div className="container-fluid content">
            <div className="container">
                <h1>Informacje dodatkowe</h1>
                <div className="container-info">
                    <ReactMarkdown children={additionalInfo.content}/>
                </div>
            </div>
        </div>
    );
};

export default AdditionalInfo;
