import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Anchor from "@ui/anchor";
import CountdownTimer from "@ui/countdown/layout-02";
import ClientAvatar from "@ui/client-avatar";
import Button from "@ui/button";
import ShareDropdown from "@components/share-dropdown";
import PlaceBidModal from "@components/modals/placebid-modal";
import { IDType, ImageType } from "@utils/types";
import placeholderImg from "../../../../public/images/banner/banner-sm-01.jpg";

const SingleSlide = ({
    title,
    path,
    latestBid,
    price,
    likeCount,
    image,
    auction_date,
    authors,
    bitCount,
    highest_bid,
    categories,
    properties,
}) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };
    return (
        <>
            {image?.src && (
                <Image
                    src={image.src}
                    alt="Slider BG"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                    className="slider-bg"
                />
            )}

            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            <h2
                                className="title theme-gradient my-5 pt-5 customTitleFont"
                                style={{ fontSize: "5.5rem" }}
                            >
                                {title}
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row d-flex align-items-center px-5 mx-5">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-left">
                        <div className="card bg-dark mb-3">
                            <div className="row no-gutters">
                                <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                                    <Image
                                        src={placeholderImg}
                                        className="card-img-center"
                                        alt="..."
                                    />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 ">
                                    <div className="card-body">
                                        <h5 className="card-title customTitleFont">
                                            Bad Dogs
                                        </h5>
                                        <p className="card-text">
                                            3,000 Unique Bad Dogs NFTs living on
                                            the Ethereum Blockchain.
                                        </p>
                                        <Anchor
                                            path="#"
                                            className="border-bottom-4"
                                        >
                                            MORE INFO
                                        </Anchor>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PlaceBidModal show={showBidModal} handleModal={handleBidModal} />
        </>
    );
};

SingleSlide.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    latestBid: PropTypes.string.isRequired,
    price: PropTypes.string,
    likeCount: PropTypes.number,
    image: ImageType,
    auction_date: PropTypes.string,
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            image: ImageType,
        })
    ),
    bitCount: PropTypes.number,
    highest_bid: PropTypes.shape({
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            image: ImageType,
        }),
        amount: PropTypes.string.isRequired,
    }),
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: IDType,
            value: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        })
    ),
    properties: PropTypes.arrayOf(
        PropTypes.shape({
            id: IDType,
            value: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        })
    ),
};

export default SingleSlide;
