import Image from "next/image"
import Iphone from "../public/iPhone-XS-MAX.png"
import Macbook from "../public/Macbook Screen.png"
const Downloads = () => {
    return (<>
        {/* Downloads */}
        <div className="downloads-container">
            <div className="downloads-items">
                <div className="mockup-img" >
                    <Image src={Iphone} width={300} height={600} />
                </div>

                <div className="download-links">
                    <h2>DOWNLOAD</h2>
                    <div className="btn-group">
                        <button className="btn btn-primary">DOWNLOAD Apple</button>
                        <button className="btn btn-primary">DOWNLOAD Android</button>
                    </div>
                </div>

            </div>
            <div className="downloads-items">

                <div className="download-links">
                    <h2>DOWNLOAD</h2>
                    <div className="btn-group">
                        <button className="btn btn-primary">DOWNLOAD PC</button>
                    </div>
                </div>
                <div className="mockup-img" >
                    <Image src={Macbook} width={600} height={400} />
                </div>

            </div>

        </div>

    </>);

}

export default Downloads;