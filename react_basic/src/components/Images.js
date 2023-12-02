// dentro do assets
import imagem2 from "../assets/img2.jpg"

const Images = () => {

    return (
        <div>
            {/* procura no public */}
            <img src="/img1.jpg" />
            <img src={imagem2} />
        </div>
    );
};

export default Images;