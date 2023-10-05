import './card.css';

const cardComponent = (props) => {
    const {sectionCard} = props;
    return (
        <div className="col-sm-7 col-lg-4">
            <div className="card mb-3 mt-3 text-center">
                <img src={sectionCard.iconUrl} className="image-font card-img-top" alt="vdv" />
                <div className="card-body">
                    <h2 className="card-title">{sectionCard.title}</h2>
                    <p className="card-text">{sectionCard.text}</p>
                </div>

            </div>
        </div>
    );
}

export default cardComponent;